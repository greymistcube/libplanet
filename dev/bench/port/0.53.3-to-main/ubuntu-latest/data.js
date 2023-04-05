window.BENCHMARK_DATA = {
  "lastUpdate": 1680661637637,
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
          "id": "fb76686b4182016bc58f8f9c7ddcaad65f667177",
          "message": "Merge tag '0.53.3' into port/0.53.4-to-main",
          "timestamp": "2023-04-05T11:13:46+09:00",
          "tree_id": "59bc08dfe2b68ab052100fa319209ce2d4dc57b2",
          "url": "https://github.com/greymistcube/libplanet/commit/fb76686b4182016bc58f8f9c7ddcaad65f667177"
        },
        "date": 1680661631019,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250979.5483870967,
            "unit": "ns",
            "range": "± 96791.3731802715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3447554.0322580645,
            "unit": "ns",
            "range": "± 97576.79201138075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4217606.6875,
            "unit": "ns",
            "range": "± 72521.62026937783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4419623.216216216,
            "unit": "ns",
            "range": "± 147430.52332429052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7493743.388888889,
            "unit": "ns",
            "range": "± 127609.23589206825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7559425.75,
            "unit": "ns",
            "range": "± 18911.68290730266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20499552.75,
            "unit": "ns",
            "range": "± 195623.6029750291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50979434.428571425,
            "unit": "ns",
            "range": "± 640779.033010446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101207730.71428572,
            "unit": "ns",
            "range": "± 707503.9869134121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200239516.07142857,
            "unit": "ns",
            "range": "± 1102489.2139210366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354304.4387755103,
            "unit": "ns",
            "range": "± 86389.71874026438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606248.2258064514,
            "unit": "ns",
            "range": "± 78976.33896246381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169241.5,
            "unit": "ns",
            "range": "± 97985.05512271573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5415843.735294118,
            "unit": "ns",
            "range": "± 160904.69930766922"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49080.873239436616,
            "unit": "ns",
            "range": "± 2405.2397203342625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5785848.108854166,
            "unit": "ns",
            "range": "± 28566.316679333486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1821168.5425502232,
            "unit": "ns",
            "range": "± 2770.8958839382035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348824.888671875,
            "unit": "ns",
            "range": "± 7383.395411646043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578268.080208333,
            "unit": "ns",
            "range": "± 5936.2370114386595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829124.1065104167,
            "unit": "ns",
            "range": "± 2018.5814799521056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751430.0486328125,
            "unit": "ns",
            "range": "± 1356.505462122278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321405.88,
            "unit": "ns",
            "range": "± 8442.36764934261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262953.14285714284,
            "unit": "ns",
            "range": "± 4641.500103284628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235441.15384615384,
            "unit": "ns",
            "range": "± 1789.0891465656412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5581311.533333333,
            "unit": "ns",
            "range": "± 80367.73924002331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3792667.6666666665,
            "unit": "ns",
            "range": "± 65871.14370026493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17477.842105263157,
            "unit": "ns",
            "range": "± 838.3611163475492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83097.30769230769,
            "unit": "ns",
            "range": "± 4257.932777823006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72247.15384615384,
            "unit": "ns",
            "range": "± 806.8615996722369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 176569.30208333334,
            "unit": "ns",
            "range": "± 15037.973715070579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5450.628865979382,
            "unit": "ns",
            "range": "± 527.7623028644073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16765.3125,
            "unit": "ns",
            "range": "± 882.3427330555567"
          }
        ]
      }
    ]
  }
}