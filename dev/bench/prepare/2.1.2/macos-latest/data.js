window.BENCHMARK_DATA = {
  "lastUpdate": 1687446633251,
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
          "id": "e5844dd33f6dc8fd839162f13fabf07ba45790f5",
          "message": "Prepare 2.1.2",
          "timestamp": "2023-06-22T23:48:44+09:00",
          "tree_id": "eec1297b63193313b8d4c6d719ea52a649f84825",
          "url": "https://github.com/greymistcube/libplanet/commit/e5844dd33f6dc8fd839162f13fabf07ba45790f5"
        },
        "date": 1687446607907,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11751956.229166666,
            "unit": "ns",
            "range": "± 2960504.1386628114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28307296.12244898,
            "unit": "ns",
            "range": "± 4684215.476329676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58831255.166666664,
            "unit": "ns",
            "range": "± 721224.0377341885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130092664.88297872,
            "unit": "ns",
            "range": "± 14720771.149133224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238963926.65384614,
            "unit": "ns",
            "range": "± 12267104.662509184"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71014.91208791209,
            "unit": "ns",
            "range": "± 9103.76303593233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374246.3125,
            "unit": "ns",
            "range": "± 19486.6719727098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 369831.8,
            "unit": "ns",
            "range": "± 32557.045894467577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 345224.4337349398,
            "unit": "ns",
            "range": "± 18400.45110475176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4764955.615384615,
            "unit": "ns",
            "range": "± 42970.912488446695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4391214.380952381,
            "unit": "ns",
            "range": "± 99949.8417424841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19710.03370786517,
            "unit": "ns",
            "range": "± 1651.1157002672617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103574.51648351649,
            "unit": "ns",
            "range": "± 11252.730259672428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103712.34042553192,
            "unit": "ns",
            "range": "± 16016.838502129387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120939.9797979798,
            "unit": "ns",
            "range": "± 16961.017593762303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6399.204301075269,
            "unit": "ns",
            "range": "± 1108.6650566367584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19079.653846153848,
            "unit": "ns",
            "range": "± 1949.0464273763143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2106722.5674157306,
            "unit": "ns",
            "range": "± 279453.7468438853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3926398.285714286,
            "unit": "ns",
            "range": "± 422912.0861917687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3164708.6860465114,
            "unit": "ns",
            "range": "± 358865.7448791305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16497957.127659574,
            "unit": "ns",
            "range": "± 4756953.296435036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3887009.2837837837,
            "unit": "ns",
            "range": "± 194640.8161937145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4235848.820224719,
            "unit": "ns",
            "range": "± 469386.53823151696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5091185.370786517,
            "unit": "ns",
            "range": "± 433552.44069679163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4954160.738636363,
            "unit": "ns",
            "range": "± 271124.42647401197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9178435.209677419,
            "unit": "ns",
            "range": "± 383791.4413698224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7569181.503216912,
            "unit": "ns",
            "range": "± 149988.82458031768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2324463.2623922415,
            "unit": "ns",
            "range": "± 67107.89385247743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1476887.7528545673,
            "unit": "ns",
            "range": "± 7576.329117907482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3139740.2075520833,
            "unit": "ns",
            "range": "± 29139.37047114433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029064.4631696428,
            "unit": "ns",
            "range": "± 12660.715512543333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913705.8362630209,
            "unit": "ns",
            "range": "± 7677.133292413865"
          }
        ]
      }
    ]
  }
}