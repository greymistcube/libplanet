window.BENCHMARK_DATA = {
  "lastUpdate": 1701915407650,
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
          "id": "705ff9bd2bef560885a5787490cfcb49bd42c5f8",
          "message": "Commit frequently",
          "timestamp": "2023-12-07T11:02:29+09:00",
          "tree_id": "49d891ca58f88d1fb2a85231602da64a73e414ad",
          "url": "https://github.com/greymistcube/libplanet/commit/705ff9bd2bef560885a5787490cfcb49bd42c5f8"
        },
        "date": 1701915384931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 917362.6262626263,
            "unit": "ns",
            "range": "± 81908.04648352109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1681612,
            "unit": "ns",
            "range": "± 78404.6467872781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1287884.8484848484,
            "unit": "ns",
            "range": "± 110549.39551947676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5363183.13253012,
            "unit": "ns",
            "range": "± 286243.54239995935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34122.05882352941,
            "unit": "ns",
            "range": "± 1603.1541287933771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5046973.333333333,
            "unit": "ns",
            "range": "± 32679.470765662798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13002583.333333334,
            "unit": "ns",
            "range": "± 79011.47020681507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32358880,
            "unit": "ns",
            "range": "± 246048.01563922438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64726046.666666664,
            "unit": "ns",
            "range": "± 371864.91185196093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129204714.28571428,
            "unit": "ns",
            "range": "± 625835.933104544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3113885.8854166665,
            "unit": "ns",
            "range": "± 7404.071291575463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 993334.1657366072,
            "unit": "ns",
            "range": "± 1607.0661738712554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 680915.9877232143,
            "unit": "ns",
            "range": "± 1415.909540657229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936515.8482142857,
            "unit": "ns",
            "range": "± 3361.6826979252733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603175.390625,
            "unit": "ns",
            "range": "± 1869.2840193940006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 546178.9899553572,
            "unit": "ns",
            "range": "± 1218.0193291106139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2111031.6666666665,
            "unit": "ns",
            "range": "± 93228.45003259588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2167422.448979592,
            "unit": "ns",
            "range": "± 46552.22544495109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2787092.8571428573,
            "unit": "ns",
            "range": "± 46833.80541521615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2624290.909090909,
            "unit": "ns",
            "range": "± 110448.28230431229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5933144.444444444,
            "unit": "ns",
            "range": "± 126767.23561766183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167302.77777777778,
            "unit": "ns",
            "range": "± 7926.7770873271875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159959.0361445783,
            "unit": "ns",
            "range": "± 7799.9223908674685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139680,
            "unit": "ns",
            "range": "± 4936.686317244777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2694773.076923077,
            "unit": "ns",
            "range": "± 29301.22733055602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2446873.3333333335,
            "unit": "ns",
            "range": "± 33235.404243638965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10123.076923076924,
            "unit": "ns",
            "range": "± 1773.8268062191244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51448.3870967742,
            "unit": "ns",
            "range": "± 4080.2710082421318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44119.354838709674,
            "unit": "ns",
            "range": "± 2003.3446385676737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47739.13043478261,
            "unit": "ns",
            "range": "± 8277.17577413858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2319.7916666666665,
            "unit": "ns",
            "range": "± 296.1577785987755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9775,
            "unit": "ns",
            "range": "± 786.4148242893625"
          }
        ]
      }
    ]
  }
}