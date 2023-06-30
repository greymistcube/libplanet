window.BENCHMARK_DATA = {
  "lastUpdate": 1688117646910,
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
          "id": "a6356333b6ce3987cecdc61838d8428a69efb910",
          "message": "General name changes",
          "timestamp": "2023-06-30T18:14:22+09:00",
          "tree_id": "9dd1f5bc211451c44be06e9a7b92b29245266c77",
          "url": "https://github.com/greymistcube/libplanet/commit/a6356333b6ce3987cecdc61838d8428a69efb910"
        },
        "date": 1688117621594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1719566.3265306123,
            "unit": "ns",
            "range": "± 147271.23580538345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3217377.0833333335,
            "unit": "ns",
            "range": "± 266496.90251154074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2168493.8775510206,
            "unit": "ns",
            "range": "± 171399.1854906885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6367380.412371134,
            "unit": "ns",
            "range": "± 417336.49808417365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58282.608695652176,
            "unit": "ns",
            "range": "± 9195.562817876127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9042082.051282052,
            "unit": "ns",
            "range": "± 315298.691195136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25168836.363636363,
            "unit": "ns",
            "range": "± 606898.1137880398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64665320,
            "unit": "ns",
            "range": "± 1900973.352930473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131208850,
            "unit": "ns",
            "range": "± 2409738.37639414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259944440,
            "unit": "ns",
            "range": "± 4248669.466987787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6072185.208333333,
            "unit": "ns",
            "range": "± 60339.43987953334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939907.2786458333,
            "unit": "ns",
            "range": "± 29541.81615212435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1548879.0211397058,
            "unit": "ns",
            "range": "± 30367.83336819605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3248680,
            "unit": "ns",
            "range": "± 32132.404448276444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1051998.8541666667,
            "unit": "ns",
            "range": "± 10255.508741401074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 976989.9489182692,
            "unit": "ns",
            "range": "± 6300.230734306275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3718780,
            "unit": "ns",
            "range": "± 187549.81176181408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4034630.1886792453,
            "unit": "ns",
            "range": "± 167320.5164496085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5205563.3802816905,
            "unit": "ns",
            "range": "± 251973.66089076884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4550246.464646464,
            "unit": "ns",
            "range": "± 278926.2635035784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7948917.857142857,
            "unit": "ns",
            "range": "± 226630.60015931525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323486.0215053763,
            "unit": "ns",
            "range": "± 34099.3484299533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302554.94505494507,
            "unit": "ns",
            "range": "± 23488.34824019141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275093.47826086957,
            "unit": "ns",
            "range": "± 26528.08921575549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5010819.047619048,
            "unit": "ns",
            "range": "± 268728.107531377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4529078.125,
            "unit": "ns",
            "range": "± 260063.12480793663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20168.235294117647,
            "unit": "ns",
            "range": "± 2897.38025204321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97982.29166666667,
            "unit": "ns",
            "range": "± 14181.403648081685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105226.80412371134,
            "unit": "ns",
            "range": "± 21703.674398320578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124209.1836734694,
            "unit": "ns",
            "range": "± 22880.190354692142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6222.826086956522,
            "unit": "ns",
            "range": "± 1230.2151389505825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18439.772727272728,
            "unit": "ns",
            "range": "± 2152.2263144643816"
          }
        ]
      }
    ]
  }
}