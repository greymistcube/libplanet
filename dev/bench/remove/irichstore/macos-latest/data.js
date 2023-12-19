window.BENCHMARK_DATA = {
  "lastUpdate": 1702967904833,
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
          "id": "56df40f304df3cbc85ce84447c148d9cdd54da7a",
          "message": "Remove unnecessary arguments",
          "timestamp": "2023-12-19T15:18:03+09:00",
          "tree_id": "4b66446b048ef2de59401d42b381fefc544182ee",
          "url": "https://github.com/greymistcube/libplanet/commit/56df40f304df3cbc85ce84447c148d9cdd54da7a"
        },
        "date": 1702967890334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9362971.728915663,
            "unit": "ns",
            "range": "± 1434927.9779173955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30168593.5,
            "unit": "ns",
            "range": "± 6963285.998688711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59177078.92553192,
            "unit": "ns",
            "range": "± 8991203.932713874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106183645.23529412,
            "unit": "ns",
            "range": "± 6497585.525271717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230243577.72727272,
            "unit": "ns",
            "range": "± 23013286.424493723"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74108.20689655172,
            "unit": "ns",
            "range": "± 8179.761705657887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354198.3842105263,
            "unit": "ns",
            "range": "± 60207.96028639529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353662.1145833333,
            "unit": "ns",
            "range": "± 59400.84989722831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 335400.53225806454,
            "unit": "ns",
            "range": "± 50947.91171029733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4630586.166666667,
            "unit": "ns",
            "range": "± 399472.20876774704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4136560.8440860217,
            "unit": "ns",
            "range": "± 252393.9764660769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22027.40322580645,
            "unit": "ns",
            "range": "± 4791.203790517795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101398.03260869565,
            "unit": "ns",
            "range": "± 18509.082602310267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104274.5425531915,
            "unit": "ns",
            "range": "± 14500.205388174507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107597.76842105263,
            "unit": "ns",
            "range": "± 16388.858256970718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6818.283505154639,
            "unit": "ns",
            "range": "± 1246.7587830283846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17926.957446808512,
            "unit": "ns",
            "range": "± 1928.5633778724593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1506336.6914893617,
            "unit": "ns",
            "range": "± 142341.43280359806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3114032.9101123596,
            "unit": "ns",
            "range": "± 388216.9168433486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2246736.3263157895,
            "unit": "ns",
            "range": "± 230553.0229348851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11330660.81443299,
            "unit": "ns",
            "range": "± 2564095.2380628306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3575476.258426966,
            "unit": "ns",
            "range": "± 471305.3675200817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587281.011111111,
            "unit": "ns",
            "range": "± 315611.01771933015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4443251.863636363,
            "unit": "ns",
            "range": "± 375535.2394284136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4297141.78021978,
            "unit": "ns",
            "range": "± 547709.0566424397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20623167.802083332,
            "unit": "ns",
            "range": "± 3369990.0417961087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5787333.084472656,
            "unit": "ns",
            "range": "± 111175.7090437746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1771992.3140285327,
            "unit": "ns",
            "range": "± 27550.47624935806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1072129.238671875,
            "unit": "ns",
            "range": "± 7004.035565754657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2784730.611672794,
            "unit": "ns",
            "range": "± 49505.46093872359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 939419.462858073,
            "unit": "ns",
            "range": "± 27545.77285778698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783424.644670759,
            "unit": "ns",
            "range": "± 18234.037505391952"
          }
        ]
      }
    ]
  }
}