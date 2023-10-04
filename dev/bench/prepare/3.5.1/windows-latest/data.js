window.BENCHMARK_DATA = {
  "lastUpdate": 1696420772332,
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
          "id": "4b291f9f2f211836d49e6e0dc09e2ce4eb81f773",
          "message": "Prepare 3.5.1",
          "timestamp": "2023-10-04T20:35:54+09:00",
          "tree_id": "6660c95a6a1132eb392ccdb1480cc8a13c802149",
          "url": "https://github.com/greymistcube/libplanet/commit/4b291f9f2f211836d49e6e0dc09e2ce4eb81f773"
        },
        "date": 1696420742419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1773235.0515463918,
            "unit": "ns",
            "range": "± 233406.24279409868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3459140.860215054,
            "unit": "ns",
            "range": "± 335529.05408977985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2683137.0786516853,
            "unit": "ns",
            "range": "± 287856.2888688881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12473697.849462366,
            "unit": "ns",
            "range": "± 1577518.6624665041"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72535.55555555556,
            "unit": "ns",
            "range": "± 8320.440663447911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10525262.365591398,
            "unit": "ns",
            "range": "± 721904.7055493842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27083889.247311827,
            "unit": "ns",
            "range": "± 1559797.436644061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68350512.12121212,
            "unit": "ns",
            "range": "± 3158219.8956673797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141563138.70967743,
            "unit": "ns",
            "range": "± 6374934.6336052185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282764220.51282054,
            "unit": "ns",
            "range": "± 9896826.740616342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5931586.74368351,
            "unit": "ns",
            "range": "± 231273.3439036479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838940.46875,
            "unit": "ns",
            "range": "± 28008.518787364083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346653.1024639423,
            "unit": "ns",
            "range": "± 36678.02658884869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3545553.556743421,
            "unit": "ns",
            "range": "± 174076.33285913538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1116381.9382440476,
            "unit": "ns",
            "range": "± 39941.94519414418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999970.46875,
            "unit": "ns",
            "range": "± 28155.448835562085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4234034.782608695,
            "unit": "ns",
            "range": "± 262535.95690302155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4533442.857142857,
            "unit": "ns",
            "range": "± 364041.94115600875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5733335.955056179,
            "unit": "ns",
            "range": "± 510984.4283001887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5920429.47368421,
            "unit": "ns",
            "range": "± 988929.8986486399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14534008.045977011,
            "unit": "ns",
            "range": "± 1540866.368745148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340198.8505747126,
            "unit": "ns",
            "range": "± 28265.92366302443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342239.1304347826,
            "unit": "ns",
            "range": "± 43522.88764186146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310729.57746478874,
            "unit": "ns",
            "range": "± 14009.796514951318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5219138.461538462,
            "unit": "ns",
            "range": "± 179341.20466950058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5041193.617021277,
            "unit": "ns",
            "range": "± 388007.666981258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31397.872340425532,
            "unit": "ns",
            "range": "± 4527.092368934075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 136272.72727272726,
            "unit": "ns",
            "range": "± 15045.362269145347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 134455.4347826087,
            "unit": "ns",
            "range": "± 9295.625393551443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133810,
            "unit": "ns",
            "range": "± 19699.775352429027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9816.483516483517,
            "unit": "ns",
            "range": "± 868.7492588343745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24643.67816091954,
            "unit": "ns",
            "range": "± 4497.3816969180325"
          }
        ]
      }
    ]
  }
}