window.BENCHMARK_DATA = {
  "lastUpdate": 1706256838249,
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
          "id": "22b0d9d825ae52af2883ef4870982de55426d6cc",
          "message": "Merge tag '4.0.1' into merge/4.0.1-to-main\n\nLibplanet 4.0.1",
          "timestamp": "2024-01-26T16:48:50+09:00",
          "tree_id": "4a2295b52476b530269c259f0087e0b69e593507",
          "url": "https://github.com/greymistcube/libplanet/commit/22b0d9d825ae52af2883ef4870982de55426d6cc"
        },
        "date": 1706256823694,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8931996.17,
            "unit": "ns",
            "range": "± 527065.920344895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22626260.45238095,
            "unit": "ns",
            "range": "± 814020.8521530923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53882816.038461536,
            "unit": "ns",
            "range": "± 1450213.730748602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109359752,
            "unit": "ns",
            "range": "± 4660213.984234259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228911734.6111111,
            "unit": "ns",
            "range": "± 4783215.043582225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78154.8953488372,
            "unit": "ns",
            "range": "± 6919.370801519405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339443.25581395347,
            "unit": "ns",
            "range": "± 28668.81631973957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344692.5054945055,
            "unit": "ns",
            "range": "± 37557.3246320796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329650.0543478261,
            "unit": "ns",
            "range": "± 39270.48556755186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4849762.545977011,
            "unit": "ns",
            "range": "± 664512.7282092602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4389690.994382023,
            "unit": "ns",
            "range": "± 577250.358584855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27787.617021276597,
            "unit": "ns",
            "range": "± 3690.4150656974234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123986.30434782608,
            "unit": "ns",
            "range": "± 15621.252472783428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116504.72,
            "unit": "ns",
            "range": "± 5853.1186756592715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121936.51111111112,
            "unit": "ns",
            "range": "± 14961.791861717576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9283.865979381444,
            "unit": "ns",
            "range": "± 1371.4838195429218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27169.133333333335,
            "unit": "ns",
            "range": "± 2713.494651477225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1607483.9555555556,
            "unit": "ns",
            "range": "± 243289.52002894357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3180766.533707865,
            "unit": "ns",
            "range": "± 401192.25542640255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2802862.1505376343,
            "unit": "ns",
            "range": "± 341956.78371418663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 40438898.78571428,
            "unit": "ns",
            "range": "± 9584632.789988639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3915548.5280898875,
            "unit": "ns",
            "range": "± 679823.6063449088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3581726.4175257734,
            "unit": "ns",
            "range": "± 281009.6627544101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4579830.4949494945,
            "unit": "ns",
            "range": "± 361875.531556548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4830489.37755102,
            "unit": "ns",
            "range": "± 404126.69768540235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31538126.595959596,
            "unit": "ns",
            "range": "± 3466362.2155531105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6678749.36828125,
            "unit": "ns",
            "range": "± 455337.1208883538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1884922.1246448865,
            "unit": "ns",
            "range": "± 46008.564789457945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1247377.3832077752,
            "unit": "ns",
            "range": "± 66784.25458016148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3841640.4915081523,
            "unit": "ns",
            "range": "± 146409.09123231258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 960742.7806507457,
            "unit": "ns",
            "range": "± 34082.28474275627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886285.3987379808,
            "unit": "ns",
            "range": "± 45196.95698236547"
          }
        ]
      }
    ]
  }
}