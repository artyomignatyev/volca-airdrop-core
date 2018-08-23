export const ABI = [
    {
	"constant": false,
	"inputs": [],
	"name": "stop",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "TOKEN_ADDRESS",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "CLAIM_AMOUNT",
	"outputs": [
	    {
		"name": "",
		"type": "uint256"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "AIRDROPPER",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_addressSigned",
		"type": "address"
	    },
	    {
		"name": "_v",
		"type": "uint8"
	    },
	    {
		"name": "_r",
		"type": "bytes32"
	    },
	    {
		"name": "_s",
		"type": "bytes32"
	    }
	],
	"name": "verifySignature",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "pure",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "unpause",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "paused",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "stopped",
	"outputs": [
	    {
		"name": "",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "pause",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "owner",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "AIRDROP_TRANSIT_ADDRESS",
	"outputs": [
	    {
		"name": "",
		"type": "address"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_transitAddress",
		"type": "address"
	    }
	],
	"name": "isLinkClaimed",
	"outputs": [
	    {
		"name": "claimed",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_recipient",
		"type": "address"
	    },
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_keyV",
		"type": "uint8"
	    },
	    {
		"name": "_keyR",
		"type": "bytes32"
	    },
	    {
		"name": "_keyS",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientV",
		"type": "uint8"
	    },
	    {
		"name": "_recipientR",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientS",
		"type": "bytes32"
	    }
	],
	"name": "checkWithdrawal",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "CLAIM_AMOUNT_ETH",
	"outputs": [
	    {
		"name": "",
		"type": "uint256"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [
	    {
		"name": "_recipient",
		"type": "address"
	    },
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_keyV",
		"type": "uint8"
	    },
	    {
		"name": "_keyR",
		"type": "bytes32"
	    },
	    {
		"name": "_keyS",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientV",
		"type": "uint8"
	    },
	    {
		"name": "_recipientR",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientS",
		"type": "bytes32"
	    }
	],
	"name": "withdraw",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": false,
	"inputs": [],
	"name": "getEtherBack",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"inputs": [
	    {
		"name": "_tokenAddress",
		"type": "address"
	    },
	    {
		"name": "_claimAmount",
		"type": "uint256"
	    },
	    {
		"name": "_claimAmountEth",
		"type": "uint256"
	    },
	    {
		"name": "_airdropTransitAddress",
		"type": "address"
	    }
	],
	"payable": true,
	"stateMutability": "payable",
	"type": "constructor"
    },
    {
	"anonymous": false,
	"inputs": [],
	"name": "Stop",
	"type": "event"
    },
    {
	"anonymous": false,
	"inputs": [],
	"name": "Pause",
	"type": "event"
    },
    {
	"anonymous": false,
	"inputs": [],
	"name": "Unpause",
	"type": "event"
    }
];

    
export const BYTECODE =  "608060405260008060146101000a81548160ff02191690831515021790555060008060156101000a81548160ff0219169083151502179055506040516080806110ab83398101806040528101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826002819055508160038190555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050610f0f8061019c6000396000f3006080604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806307da68f5146100eb5780630bdf530014610102578063270ef38514610159578063368a5e34146101845780633dabb0f6146101db5780633f4ba83a1461027f5780635c975abb1461029657806375f12b21146102c55780638456cb59146102f45780638da5cb5b1461030b578063998ac10414610362578063b2e357b4146103b9578063c3886f6114610414578063c90c205b146104e1578063d2874e491461050c578063fd68610f146105d9575b600080fd5b3480156100f757600080fd5b50610100610608565b005b34801561010e57600080fd5b506101176106c8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016557600080fd5b5061016e6106ee565b6040518082815260200191505060405180910390f35b34801561019057600080fd5b506101996106f4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101e757600080fd5b50610265600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff1690602001909291908035600019169060200190929190803560001916906020019092919050505061071a565b604051808215151515815260200191505060405180910390f35b34801561028b57600080fd5b50610294610859565b005b3480156102a257600080fd5b506102ab610917565b604051808215151515815260200191505060405180910390f35b3480156102d157600080fd5b506102da61092a565b604051808215151515815260200191505060405180910390f35b34801561030057600080fd5b5061030961093d565b005b34801561031757600080fd5b506103206109fd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561036e57600080fd5b50610377610a22565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103c557600080fd5b506103fa600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a48565b604051808215151515815260200191505060405180910390f35b34801561042057600080fd5b506104c7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050610a9e565b604051808215151515815260200191505060405180910390f35b3480156104ed57600080fd5b506104f6610b88565b6040518082815260200191505060405180910390f35b34801561051857600080fd5b506105bf600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190803560ff16906020019092919080356000191690602001909291908035600019169060200190929190505050610b8e565b604051808215151515815260200191505060405180910390f35b3480156105e557600080fd5b506105ee610dfe565b604051808215151515815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561066357600080fd5b600060159054906101000a900460ff1615151561067f57600080fd5b6001600060156101000a81548160ff0219169083151502179055507fbedf0f4abfe86d4ffad593d9607fe70e83ea706033d44d24b3b6283cf3fc4f6b60405160405180910390a1565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008660405180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140191505060405180910390209150600182878787604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015610811573d6000803e3d6000fd5b5050506020604051035190508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16149250505095945050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108b457600080fd5b600060149054906101000a900460ff1615156108cf57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b600060159054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561099857600080fd5b600060149054906101000a900460ff161515156109b457600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000801515600660008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515610afe57600080fd5b610b2d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168989898961071a565b1515610b3857600080fd5b610b45888a86868661071a565b1515610b5057600080fd5b6003543073ffffffffffffffffffffffffffffffffffffffff163110151515610b7857600080fd5b6001905098975050505050505050565b60035481565b600080600060149054906101000a900460ff16151515610bad57600080fd5b600060159054906101000a900460ff16151515610bc957600080fd5b610bd98a8a8a8a8a8a8a8a610a9e565b1515610be457600080fd5b6001600660008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166323b872dd600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168c6002546040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610d5c57600080fd5b505af1158015610d70573d6000803e3d6000fd5b505050506040513d6020811015610d8657600080fd5b81019080805190602001909291905050505060006003541115610ded578973ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f19350505050158015610deb573d6000803e3d6000fd5b505b600191505098975050505050505050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e5c57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610edb573d6000803e3d6000fd5b5060019050905600a165627a7a72305820c3be74c5356a09014be790188c4db0bdb7ba93f45b3eed890f9714838876d70d0029";
