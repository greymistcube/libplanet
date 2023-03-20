window.BENCHMARK_DATA = {
  "lastUpdate": 1679310078881,
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
        "date": 1679310055074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1765296.8085106383,
            "unit": "ns",
            "range": "± 223163.74597274212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3151803.125,
            "unit": "ns",
            "range": "± 197758.21678484324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2628317.204301075,
            "unit": "ns",
            "range": "± 269423.8000782798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6317922.916666667,
            "unit": "ns",
            "range": "± 465232.35631674965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56547.31182795699,
            "unit": "ns",
            "range": "± 7161.181457629578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8391162.5,
            "unit": "ns",
            "range": "± 213340.64985472127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21864703.092783507,
            "unit": "ns",
            "range": "± 1864860.797500134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58611492.85714286,
            "unit": "ns",
            "range": "± 4701099.993744609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111507695.87628865,
            "unit": "ns",
            "range": "± 7690908.995581482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244570943.0379747,
            "unit": "ns",
            "range": "± 12551994.248935243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5726215.983072917,
            "unit": "ns",
            "range": "± 138999.52716984024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790874.6707589286,
            "unit": "ns",
            "range": "± 58561.2131991391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370331.3040226065,
            "unit": "ns",
            "range": "± 52990.80986368703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3047300.673204787,
            "unit": "ns",
            "range": "± 107458.80343061475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992317.7490234375,
            "unit": "ns",
            "range": "± 25241.217664665088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 896913.5850694445,
            "unit": "ns",
            "range": "± 25099.88841977416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3607161.4583333335,
            "unit": "ns",
            "range": "± 297323.44265384646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6092996.666666667,
            "unit": "ns",
            "range": "± 337606.099993482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29316670.967741936,
            "unit": "ns",
            "range": "± 2601312.7526049917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6862826.804123712,
            "unit": "ns",
            "range": "± 436401.35662681155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31954045.91836735,
            "unit": "ns",
            "range": "± 2785894.464559557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195351.08695652173,
            "unit": "ns",
            "range": "± 17831.300388104537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202822.1052631579,
            "unit": "ns",
            "range": "± 15923.141054849433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 188003.0612244898,
            "unit": "ns",
            "range": "± 22721.806838282315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13156102.150537634,
            "unit": "ns",
            "range": "± 934403.6418298519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10738043.877551021,
            "unit": "ns",
            "range": "± 844436.5593069074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24078,
            "unit": "ns",
            "range": "± 6618.348843491209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57081.25,
            "unit": "ns",
            "range": "± 8879.79744316158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46638.29787234042,
            "unit": "ns",
            "range": "± 7113.762315112123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103147.19101123596,
            "unit": "ns",
            "range": "± 13632.890458270065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10779,
            "unit": "ns",
            "range": "± 5700.191295744451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21018.367346938776,
            "unit": "ns",
            "range": "± 5527.538311146367"
          }
        ]
      }
    ]
  }
}