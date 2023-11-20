window.BENCHMARK_DATA = {
  "lastUpdate": 1700448208475,
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
      }
    ]
  }
}