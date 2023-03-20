window.BENCHMARK_DATA = {
  "lastUpdate": 1679310281416,
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
          "id": "84cb01bc9136fbaec92c2bc40f6a892c4711ccb7",
          "message": "Removed ByteArray and ToByteArray() from BlockCommit",
          "timestamp": "2023-03-20T18:52:26+09:00",
          "tree_id": "a833bf978224ee20531425ec6bad0b69d2c24aa3",
          "url": "https://github.com/greymistcube/libplanet/commit/84cb01bc9136fbaec92c2bc40f6a892c4711ccb7"
        },
        "date": 1679310263238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9979519.3172043,
            "unit": "ns",
            "range": "± 1956377.3017776955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22119465.654639177,
            "unit": "ns",
            "range": "± 1514167.9388201432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58670375.721518986,
            "unit": "ns",
            "range": "± 4030096.93358789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112949948.95744681,
            "unit": "ns",
            "range": "± 4393227.784707346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236372350.70238096,
            "unit": "ns",
            "range": "± 18723707.590258226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74755.69473684211,
            "unit": "ns",
            "range": "± 9415.71307236697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249875.7,
            "unit": "ns",
            "range": "± 23857.09718370163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254866.55555555556,
            "unit": "ns",
            "range": "± 26193.64457970035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303284.13440860214,
            "unit": "ns",
            "range": "± 89965.98070427668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14630547.132653061,
            "unit": "ns",
            "range": "± 1273351.4243445934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10346531.352941176,
            "unit": "ns",
            "range": "± 329537.80851663655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27297.03370786517,
            "unit": "ns",
            "range": "± 2973.091482743166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70997.66292134831,
            "unit": "ns",
            "range": "± 8345.599304347363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65031.44382022472,
            "unit": "ns",
            "range": "± 6092.264427048508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148461.45876288658,
            "unit": "ns",
            "range": "± 25057.705553431035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9151.427835051547,
            "unit": "ns",
            "range": "± 1673.9044566983625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23596.031578947368,
            "unit": "ns",
            "range": "± 5670.059098443616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779163.2252747254,
            "unit": "ns",
            "range": "± 315675.41575316695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2910878.6,
            "unit": "ns",
            "range": "± 128420.56519791734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2503445.717171717,
            "unit": "ns",
            "range": "± 187335.88178690802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5957504.08,
            "unit": "ns",
            "range": "± 153302.19064180614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3783574.606741573,
            "unit": "ns",
            "range": "± 435728.59910386195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5901759.364583333,
            "unit": "ns",
            "range": "± 483905.17375437845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28818486.123595506,
            "unit": "ns",
            "range": "± 2246436.675804766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7385253.11827957,
            "unit": "ns",
            "range": "± 668393.8569949811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34115139.71875,
            "unit": "ns",
            "range": "± 2722464.5569375083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7939916.210164835,
            "unit": "ns",
            "range": "± 495858.9225519385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2143612.2417629077,
            "unit": "ns",
            "range": "± 81681.1574211766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327436.261439732,
            "unit": "ns",
            "range": "± 20302.838025796682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2966120.5184765626,
            "unit": "ns",
            "range": "± 299162.68257694633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 945570.2898312833,
            "unit": "ns",
            "range": "± 53888.108126510284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934933.3277994791,
            "unit": "ns",
            "range": "± 49792.53678852952"
          }
        ]
      }
    ]
  }
}