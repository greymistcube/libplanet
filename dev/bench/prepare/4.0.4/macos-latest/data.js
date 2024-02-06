window.BENCHMARK_DATA = {
  "lastUpdate": 1707214549441,
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
          "id": "b9493a873cb60fdf51d55d6f25c3903a40d15a58",
          "message": "Prepare 4.0.4",
          "timestamp": "2024-02-06T18:53:06+09:00",
          "tree_id": "75058dbf56fb8f6737f039bf16f5d40f7545fd4f",
          "url": "https://github.com/greymistcube/libplanet/commit/b9493a873cb60fdf51d55d6f25c3903a40d15a58"
        },
        "date": 1707214535368,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8989079.6875,
            "unit": "ns",
            "range": "± 721326.1208742555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21467982.027472526,
            "unit": "ns",
            "range": "± 1194014.585001776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58153564.98969072,
            "unit": "ns",
            "range": "± 4066503.8734920877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107636156.04761904,
            "unit": "ns",
            "range": "± 3847148.076020158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221893473.5,
            "unit": "ns",
            "range": "± 4220498.734050594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83461.35164835164,
            "unit": "ns",
            "range": "± 11708.302520835969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 364841.56382978725,
            "unit": "ns",
            "range": "± 48307.44145186034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327314.56666666665,
            "unit": "ns",
            "range": "± 33593.084517752366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316756.125,
            "unit": "ns",
            "range": "± 26631.082214927323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4698654.365853659,
            "unit": "ns",
            "range": "± 247807.3102166832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3985229.3372093025,
            "unit": "ns",
            "range": "± 145600.02729917495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28709.983516483517,
            "unit": "ns",
            "range": "± 6228.026201262656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131058.93333333333,
            "unit": "ns",
            "range": "± 29572.413099719295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121881.1,
            "unit": "ns",
            "range": "± 16300.527133580199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130590.26041666667,
            "unit": "ns",
            "range": "± 25292.519572830137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8652.1,
            "unit": "ns",
            "range": "± 1406.750267720016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25106.027472527472,
            "unit": "ns",
            "range": "± 5576.508661520633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1708227.347826087,
            "unit": "ns",
            "range": "± 279201.4480024574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3161234.8647058825,
            "unit": "ns",
            "range": "± 443910.3580417273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2828471.855555556,
            "unit": "ns",
            "range": "± 407110.0839658841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 32837712.011363637,
            "unit": "ns",
            "range": "± 6350519.290778241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3331280.829787234,
            "unit": "ns",
            "range": "± 236884.0143366132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3682858.826530612,
            "unit": "ns",
            "range": "± 404333.0257045514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4794169.381443299,
            "unit": "ns",
            "range": "± 447526.7580170124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4912174.656565657,
            "unit": "ns",
            "range": "± 451297.467806834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34272929.489795916,
            "unit": "ns",
            "range": "± 4990224.656834894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6347882.546258223,
            "unit": "ns",
            "range": "± 322496.4998417212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1958770.0647786458,
            "unit": "ns",
            "range": "± 47959.611117684624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170218.3637462799,
            "unit": "ns",
            "range": "± 27494.597608586646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3018742.075480143,
            "unit": "ns",
            "range": "± 175733.0665407404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861458.6915364583,
            "unit": "ns",
            "range": "± 11762.621774892832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740713.9426432292,
            "unit": "ns",
            "range": "± 13219.56513895474"
          }
        ]
      }
    ]
  }
}