export type QuarryOperatorIDL =
{
  "version": "1.10.0",
  "name": "quarry_operator",
  "instructions": [
    {
      "name": "createOperator",
      "accounts": [
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "operator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quarryMineProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "setAdmin",
      "accounts": [
        {
          "name": "operator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setRateSetter",
      "accounts": [
        {
          "name": "operator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setQuarryCreator",
      "accounts": [
        {
          "name": "operator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setShareAllocator",
      "accounts": [
        {
          "name": "operator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "delegateSetAnnualRewards",
      "accounts": [
        {
          "name": "withDelegate",
          "accounts": [
            {
              "name": "operator",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "delegate",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "rewarder",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "quarryMineProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "newRate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "delegateCreateQuarry",
      "accounts": [
        {
          "name": "withDelegate",
          "accounts": [
            {
              "name": "operator",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "delegate",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "rewarder",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "quarryMineProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "quarry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftUpdateAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "unusedClock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "delegateSetRewardsShare",
      "accounts": [
        {
          "name": "withDelegate",
          "accounts": [
            {
              "name": "operator",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "delegate",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "rewarder",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "quarryMineProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "quarry",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newShare",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Operator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "rewarder",
            "type": "publicKey"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "rateSetter",
            "type": "publicKey"
          },
          {
            "name": "quarryCreator",
            "type": "publicKey"
          },
          {
            "name": "shareAllocator",
            "type": "publicKey"
          },
          {
            "name": "lastModifiedTs",
            "type": "i64"
          },
          {
            "name": "generation",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "Unauthorized",
      "msg": "Unauthorized."
    }
  ]
}
;
export const QuarryOperatorJSON: QuarryOperatorIDL =
{
  "version": "1.10.0",
  "name": "quarry_operator",
  "instructions": [
    {
      "name": "createOperator",
      "accounts": [
        {
          "name": "base",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "operator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quarryMineProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "setAdmin",
      "accounts": [
        {
          "name": "operator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setRateSetter",
      "accounts": [
        {
          "name": "operator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setQuarryCreator",
      "accounts": [
        {
          "name": "operator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setShareAllocator",
      "accounts": [
        {
          "name": "operator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "delegate",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "delegateSetAnnualRewards",
      "accounts": [
        {
          "name": "withDelegate",
          "accounts": [
            {
              "name": "operator",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "delegate",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "rewarder",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "quarryMineProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        }
      ],
      "args": [
        {
          "name": "newRate",
          "type": "u64"
        }
      ]
    },
    {
      "name": "delegateCreateQuarry",
      "accounts": [
        {
          "name": "withDelegate",
          "accounts": [
            {
              "name": "operator",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "delegate",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "rewarder",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "quarryMineProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "quarry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftUpdateAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "unusedClock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "delegateSetRewardsShare",
      "accounts": [
        {
          "name": "withDelegate",
          "accounts": [
            {
              "name": "operator",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "delegate",
              "isMut": false,
              "isSigner": true
            },
            {
              "name": "rewarder",
              "isMut": true,
              "isSigner": false
            },
            {
              "name": "quarryMineProgram",
              "isMut": false,
              "isSigner": false
            }
          ]
        },
        {
          "name": "quarry",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newShare",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Operator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "base",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "rewarder",
            "type": "publicKey"
          },
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "rateSetter",
            "type": "publicKey"
          },
          {
            "name": "quarryCreator",
            "type": "publicKey"
          },
          {
            "name": "shareAllocator",
            "type": "publicKey"
          },
          {
            "name": "lastModifiedTs",
            "type": "i64"
          },
          {
            "name": "generation",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 300,
      "name": "Unauthorized",
      "msg": "Unauthorized."
    }
  ]
}
;
import { generateErrorMap } from '@saberhq/anchor-contrib';
export const QuarryOperatorErrors = generateErrorMap(QuarryOperatorJSON);
