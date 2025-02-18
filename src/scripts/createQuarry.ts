import { config } from 'dotenv';
import fs from 'fs-extra';
import { QuarryMineJSON } from './../idls/quarry_mine';

config();

import {
  getAnchorProgram,
  NFT_UPDATE_AUTHORITY,
  QUARRY_SHARE,
  SOLANA_SAMURAI_SHARE,
} from '../constants';
import { getQuarryPDA } from '../pda';
import {
  SystemProgram,
  SYSVAR_CLOCK_PUBKEY,
  Transaction,
} from '@solana/web3.js';

const {
  instruction: programInstruction,
  provider: { connection: SOLANA_CONNECTION, wallet },
} = getAnchorProgram(QuarryMineJSON, 'mine');

const REWARDER_AUTHORITY = wallet.publicKey;
const PAYER = wallet.publicKey;

(async function () {
  const { rewarderPDA, quarryPDA, bump } = await getQuarryPDA();

  console.log('Creating Quarry PDA of address:', quarryPDA.toString());
  const createQuarryIx = programInstruction.createQuarry(bump, {
    accounts: {
      quarry: quarryPDA,
      nftUpdateAuthority: NFT_UPDATE_AUTHORITY,
      auth: {
        authority: REWARDER_AUTHORITY,
        rewarder: rewarderPDA,
      },
      payer: PAYER,
      unusedClock: SYSVAR_CLOCK_PUBKEY,
      systemProgram: SystemProgram.programId,
    },
  });

  console.log(
    'Setting Quarry Rewards share of:',
    SOLANA_SAMURAI_SHARE.toNumber()
  );
  const setQuarryRewardsShareIx = programInstruction.setRewardsShare(
    SOLANA_SAMURAI_SHARE,
    {
      accounts: {
        auth: {
          authority: REWARDER_AUTHORITY,
          rewarder: rewarderPDA,
        },
        quarry: quarryPDA,
      },
    }
  );

  const transaction = new Transaction();
  transaction.feePayer = PAYER;
  transaction.recentBlockhash = (
    await SOLANA_CONNECTION.getRecentBlockhash()
  ).blockhash;

  transaction.add(createQuarryIx, setQuarryRewardsShareIx);
  const signedTransaction = await wallet.signTransaction(transaction);

  await SOLANA_CONNECTION.sendRawTransaction(signedTransaction.serialize());
  await fs.writeJSON(
    `${__dirname}/../pubkeys/quarryPDA.json`,
    quarryPDA.toString()
  );
})();
