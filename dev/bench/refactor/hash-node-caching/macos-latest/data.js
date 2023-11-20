window.BENCHMARK_DATA = {
  "lastUpdate": 1700448741474,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "32615931208586c81ef11bf6ee44bb68e9bf85bc",
          "message": "Add missing cache",
          "timestamp": "2023-11-20T11:20:28+09:00",
          "tree_id": "f9b0ba0e6dd4038f2fad50eb41a3e0ae7e232043",
          "url": "https://github.com/greymistcube/libplanet/commit/32615931208586c81ef11bf6ee44bb68e9bf85bc"
        },
        "date": 1700448177551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8244299.131313131,
            "unit": "ns",
            "range": "± 694713.2537228852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20616671.40625,
            "unit": "ns",
            "range": "± 1958881.0206423881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47231002.071428575,
            "unit": "ns",
            "range": "± 1696626.294249014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101123597.72680412,
            "unit": "ns",
            "range": "± 8779305.795764135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234872884.07368422,
            "unit": "ns",
            "range": "± 24840237.46577607"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46456.89361702128,
            "unit": "ns",
            "range": "± 12038.86270145461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318083.4310344828,
            "unit": "ns",
            "range": "± 26137.970401178107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 362807.4791666667,
            "unit": "ns",
            "range": "± 86156.70288528176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 358145.58585858584,
            "unit": "ns",
            "range": "± 77336.09663075735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6012213.010416667,
            "unit": "ns",
            "range": "± 1127075.6107529271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4667740.523529412,
            "unit": "ns",
            "range": "± 275764.90277516225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19186.747368421053,
            "unit": "ns",
            "range": "± 3881.2013959499523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100845.3021978022,
            "unit": "ns",
            "range": "± 10635.450618066376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106629.55056179775,
            "unit": "ns",
            "range": "± 13823.447529972098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96793.01075268818,
            "unit": "ns",
            "range": "± 13943.829759380269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7937.3105263157895,
            "unit": "ns",
            "range": "± 1171.5714332861965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24042.954545454544,
            "unit": "ns",
            "range": "± 3502.5266345163386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1612903.5531914893,
            "unit": "ns",
            "range": "± 320732.18162940955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3003008.6978021977,
            "unit": "ns",
            "range": "± 303568.80418160453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2293337.5888888887,
            "unit": "ns",
            "range": "± 370182.95986182976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8272770.8977272725,
            "unit": "ns",
            "range": "± 640821.6962486351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4138923.7696629213,
            "unit": "ns",
            "range": "± 580905.7325799663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3966262.5764705883,
            "unit": "ns",
            "range": "± 461920.1216793816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4474204.321428572,
            "unit": "ns",
            "range": "± 171236.03943691368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4425739.195652174,
            "unit": "ns",
            "range": "± 163896.89148619826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17710012.085106384,
            "unit": "ns",
            "range": "± 4301892.4675920075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5924461.756732048,
            "unit": "ns",
            "range": "± 231044.02864161346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1809144.5950100806,
            "unit": "ns",
            "range": "± 46492.14764874098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146439.8025948661,
            "unit": "ns",
            "range": "± 17201.77473560926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2862088.8096454325,
            "unit": "ns",
            "range": "± 45532.49642146438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852292.0853794643,
            "unit": "ns",
            "range": "± 14752.687369618727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745678.0333862305,
            "unit": "ns",
            "range": "± 75457.08968564348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "150eb9b3bca57ed032eb530d78411893d9d3779f",
          "message": "Typo fix",
          "timestamp": "2023-11-20T11:29:26+09:00",
          "tree_id": "3b29e4f3c11f13950463ba44b5d3b76ea6a30ea0",
          "url": "https://github.com/greymistcube/libplanet/commit/150eb9b3bca57ed032eb530d78411893d9d3779f"
        },
        "date": 1700448718117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11777989.589473683,
            "unit": "ns",
            "range": "± 2020058.1449977194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32283291.741935484,
            "unit": "ns",
            "range": "± 5428440.1238444345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73695876.5,
            "unit": "ns",
            "range": "± 15868817.055341423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 153626983.26804122,
            "unit": "ns",
            "range": "± 24762852.81427288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 328123031.3854167,
            "unit": "ns",
            "range": "± 56976457.53698256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64325.666666666664,
            "unit": "ns",
            "range": "± 17264.315457136112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 314612.9418604651,
            "unit": "ns",
            "range": "± 39336.87274887629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301608.30379746837,
            "unit": "ns",
            "range": "± 19107.927084606177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 368254.5833333333,
            "unit": "ns",
            "range": "± 92059.10675655089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4759375.158536585,
            "unit": "ns",
            "range": "± 392564.38286433945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4172784.2696629213,
            "unit": "ns",
            "range": "± 345781.8208020434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18675.16304347826,
            "unit": "ns",
            "range": "± 3128.55269096713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78617.35789473684,
            "unit": "ns",
            "range": "± 10808.43877355155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82665.8085106383,
            "unit": "ns",
            "range": "± 11976.289423274402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89525.94505494506,
            "unit": "ns",
            "range": "± 15236.44297317209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7890.652173913043,
            "unit": "ns",
            "range": "± 1404.6715852123282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21469.6,
            "unit": "ns",
            "range": "± 5057.462405914061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1188133.6770833333,
            "unit": "ns",
            "range": "± 135898.46227703625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2418519.594736842,
            "unit": "ns",
            "range": "± 245131.91544207264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703519.7604166667,
            "unit": "ns",
            "range": "± 237653.85270777167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7904913.698924731,
            "unit": "ns",
            "range": "± 974370.0676124571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3704000.293103448,
            "unit": "ns",
            "range": "± 274998.5178067091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4728584.885416667,
            "unit": "ns",
            "range": "± 1074184.0563741182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5934480.405263158,
            "unit": "ns",
            "range": "± 1462086.5329398264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5698961.929292929,
            "unit": "ns",
            "range": "± 1296689.4015954256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18156504.402173914,
            "unit": "ns",
            "range": "± 3501168.75449396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6762791.102352528,
            "unit": "ns",
            "range": "± 1089031.4196086898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1597734.6450500488,
            "unit": "ns",
            "range": "± 73252.25745991022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1013165.0124614877,
            "unit": "ns",
            "range": "± 47881.80263382619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602580.8699745433,
            "unit": "ns",
            "range": "± 167034.1065662419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 764575.5562672334,
            "unit": "ns",
            "range": "± 24471.507224541343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 681065.3943359375,
            "unit": "ns",
            "range": "± 11487.148304355473"
          }
        ]
      }
    ]
  }
}