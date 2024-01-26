window.BENCHMARK_DATA = {
  "lastUpdate": 1706250327412,
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
          "id": "990ba3f09df22e475923bd96d5ebb62a17e6e2d1",
          "message": "Release 3.9.6",
          "timestamp": "2024-01-26T15:02:22+09:00",
          "tree_id": "325a2bcac55fa63637e4047806c84fe2ec7ad395",
          "url": "https://github.com/greymistcube/libplanet/commit/990ba3f09df22e475923bd96d5ebb62a17e6e2d1"
        },
        "date": 1706250312264,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9192497.238636363,
            "unit": "ns",
            "range": "± 1396776.5279267982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20802019.318181816,
            "unit": "ns",
            "range": "± 1197659.9133439253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66538100.787234046,
            "unit": "ns",
            "range": "± 14814146.12203053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140653408.2142857,
            "unit": "ns",
            "range": "± 35825733.26859411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273781372.35714287,
            "unit": "ns",
            "range": "± 64455503.16607008"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75375.21264367815,
            "unit": "ns",
            "range": "± 10048.192587571724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311809.1505376344,
            "unit": "ns",
            "range": "± 28149.905456612505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300264.06382978725,
            "unit": "ns",
            "range": "± 22885.52705422459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307072.9253731343,
            "unit": "ns",
            "range": "± 14496.766889617913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4426520.5,
            "unit": "ns",
            "range": "± 225182.62802936314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3969989.6551724137,
            "unit": "ns",
            "range": "± 113953.9998393073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22120.395833333332,
            "unit": "ns",
            "range": "± 3719.5667446602506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85526.3125,
            "unit": "ns",
            "range": "± 9399.717265974714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86984.42268041238,
            "unit": "ns",
            "range": "± 8726.711777920531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112729.1170212766,
            "unit": "ns",
            "range": "± 17855.82750683655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7547.276595744681,
            "unit": "ns",
            "range": "± 1051.4892782344714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22276.327956989247,
            "unit": "ns",
            "range": "± 3744.164165226524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1743574.8369565217,
            "unit": "ns",
            "range": "± 354695.1304090545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3218093.335164835,
            "unit": "ns",
            "range": "± 374046.6918238436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2917980.6744186045,
            "unit": "ns",
            "range": "± 428686.1435802475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 30803175.02173913,
            "unit": "ns",
            "range": "± 7896724.088942866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3673696.565217391,
            "unit": "ns",
            "range": "± 414086.44832539844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3733892.505882353,
            "unit": "ns",
            "range": "± 412639.2342968158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4474465.02112676,
            "unit": "ns",
            "range": "± 219478.5636581043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4628495.556179775,
            "unit": "ns",
            "range": "± 320212.32550593244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32440527.1344086,
            "unit": "ns",
            "range": "± 4257350.483060117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7800271.971433081,
            "unit": "ns",
            "range": "± 1944347.7047973676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1801241.839453125,
            "unit": "ns",
            "range": "± 67243.8373292252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1136494.2724609375,
            "unit": "ns",
            "range": "± 27026.081914265018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2816002.2778320312,
            "unit": "ns",
            "range": "± 190479.95453961997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820356.2578974185,
            "unit": "ns",
            "range": "± 18455.99821388421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749258.6000976562,
            "unit": "ns",
            "range": "± 10153.535612173075"
          }
        ]
      }
    ]
  }
}