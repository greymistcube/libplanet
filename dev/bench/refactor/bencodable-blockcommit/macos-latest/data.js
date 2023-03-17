window.BENCHMARK_DATA = {
  "lastUpdate": 1679031330261,
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
          "id": "8bdcf2943248ad564bb640786cccf2405d470018",
          "message": "Implemented IBencodable for BlockCommit",
          "timestamp": "2023-03-17T14:20:23+09:00",
          "tree_id": "76831a6c51a007ca9ff79824232395c3d299955c",
          "url": "https://github.com/greymistcube/libplanet/commit/8bdcf2943248ad564bb640786cccf2405d470018"
        },
        "date": 1679031311703,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8143240.833333333,
            "unit": "ns",
            "range": "± 44336.590404164665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19958675.722222224,
            "unit": "ns",
            "range": "± 414875.72327988356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51707190.7037037,
            "unit": "ns",
            "range": "± 1448388.0129051378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104360443.79508197,
            "unit": "ns",
            "range": "± 4681332.299613239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 195698609.95238096,
            "unit": "ns",
            "range": "± 4435329.130957234"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58274.47777777778,
            "unit": "ns",
            "range": "± 6973.8199102034505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204519.33695652173,
            "unit": "ns",
            "range": "± 20555.321668249628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200995.73626373627,
            "unit": "ns",
            "range": "± 16752.177575092977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172197.72043010753,
            "unit": "ns",
            "range": "± 10643.70503014891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11667332.416666666,
            "unit": "ns",
            "range": "± 296356.73652247834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9440542.244444445,
            "unit": "ns",
            "range": "± 357722.34843261255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17116.191011235955,
            "unit": "ns",
            "range": "± 2054.000585755009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55472.57142857143,
            "unit": "ns",
            "range": "± 8178.3481683581185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49498.95360824742,
            "unit": "ns",
            "range": "± 5938.881658578172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112150.375,
            "unit": "ns",
            "range": "± 16733.44321710269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5966.7558139534885,
            "unit": "ns",
            "range": "± 679.8011462885395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18895.373626373625,
            "unit": "ns",
            "range": "± 3901.4889341502308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523146.688172043,
            "unit": "ns",
            "range": "± 136472.83700516622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2823702.801369863,
            "unit": "ns",
            "range": "± 139325.0720826104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2480284.8061224488,
            "unit": "ns",
            "range": "± 194231.89492856048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6167687.412698412,
            "unit": "ns",
            "range": "± 281945.86241142766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3216507.9655172415,
            "unit": "ns",
            "range": "± 139099.20132985685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4915346.525641026,
            "unit": "ns",
            "range": "± 251624.02126553218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23502254.826086957,
            "unit": "ns",
            "range": "± 894328.4737547511"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5982287.533333333,
            "unit": "ns",
            "range": "± 225889.40497464684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27326023.138888888,
            "unit": "ns",
            "range": "± 894693.7568053153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6300396.0859375,
            "unit": "ns",
            "range": "± 33040.647720636385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1938972.9024739584,
            "unit": "ns",
            "range": "± 12361.278543838196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1236455.016015625,
            "unit": "ns",
            "range": "± 4254.150700134378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2392739.345572917,
            "unit": "ns",
            "range": "± 13802.106456746784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819369.3500279018,
            "unit": "ns",
            "range": "± 2694.8909434347747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 695377.1766183035,
            "unit": "ns",
            "range": "± 4705.29296323194"
          }
        ]
      }
    ]
  }
}