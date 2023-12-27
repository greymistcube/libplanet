window.BENCHMARK_DATA = {
  "lastUpdate": 1703662075925,
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
          "id": "d3e0e0ca525f99765ad66eb996b51eb9e722f852",
          "message": "Changed FullNode to no longer inherit BaseNode; removed BaseNode",
          "timestamp": "2023-12-27T16:15:54+09:00",
          "tree_id": "fae6f4b6e37b09d5113d55d10f8cc6582dd51f3d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3e0e0ca525f99765ad66eb996b51eb9e722f852"
        },
        "date": 1703662055765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928790.9090909091,
            "unit": "ns",
            "range": "± 81126.88989139687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1689536.8421052631,
            "unit": "ns",
            "range": "± 85479.92488236485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1310811.111111111,
            "unit": "ns",
            "range": "± 132960.01385170923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5263645.333333333,
            "unit": "ns",
            "range": "± 263477.5431701058"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33924.637681159424,
            "unit": "ns",
            "range": "± 1639.1717597527766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5201213.333333333,
            "unit": "ns",
            "range": "± 59419.96858520431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13157435.714285715,
            "unit": "ns",
            "range": "± 109296.3691925826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32608036.363636363,
            "unit": "ns",
            "range": "± 778502.4124778075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65162440,
            "unit": "ns",
            "range": "± 685324.1118519866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134742453.33333334,
            "unit": "ns",
            "range": "± 1976825.506016678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3294138.309151786,
            "unit": "ns",
            "range": "± 9695.321326121351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049973.2291666667,
            "unit": "ns",
            "range": "± 2937.654403261634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735656.4034598215,
            "unit": "ns",
            "range": "± 1352.7755384789161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1883739.7686298077,
            "unit": "ns",
            "range": "± 1673.9219983568628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620679.4270833334,
            "unit": "ns",
            "range": "± 1536.6539888969196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558456.4518229166,
            "unit": "ns",
            "range": "± 1840.8799234656278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2098886.8852459015,
            "unit": "ns",
            "range": "± 89729.01328520566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2245383.3333333335,
            "unit": "ns",
            "range": "± 70728.73261897302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2778435.714285714,
            "unit": "ns",
            "range": "± 79429.99346867569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2588220.3703703703,
            "unit": "ns",
            "range": "± 101781.80580198539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5735422.222222222,
            "unit": "ns",
            "range": "± 121376.70847191862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169635.29411764705,
            "unit": "ns",
            "range": "± 8921.332191283256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161251.31578947368,
            "unit": "ns",
            "range": "± 7830.2233841451825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143193.33333333334,
            "unit": "ns",
            "range": "± 4060.145515766079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2668342.8571428573,
            "unit": "ns",
            "range": "± 43017.96966717181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2445178.5714285714,
            "unit": "ns",
            "range": "± 26390.679548525593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10600,
            "unit": "ns",
            "range": "± 1472.0554909449074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51686.81318681319,
            "unit": "ns",
            "range": "± 5088.77214597018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44428.813559322036,
            "unit": "ns",
            "range": "± 1961.7946434989701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56168.68686868687,
            "unit": "ns",
            "range": "± 14787.299062513532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2282.6530612244896,
            "unit": "ns",
            "range": "± 420.60964840424015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10140.90909090909,
            "unit": "ns",
            "range": "± 1209.315980654283"
          }
        ]
      }
    ]
  }
}