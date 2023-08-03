window.BENCHMARK_DATA = {
  "lastUpdate": 1691055376939,
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
          "id": "00df6e8b29f1fd741cf38622a90dc24c93ea57aa",
          "message": "[skip changelog] Remove offloading from MerkleTrie",
          "timestamp": "2023-08-03T18:02:54+09:00",
          "tree_id": "ec9c186229f152f3efbd7dc08393240dfeda5f5e",
          "url": "https://github.com/greymistcube/libplanet/commit/00df6e8b29f1fd741cf38622a90dc24c93ea57aa"
        },
        "date": 1691055352228,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1413629.6296296297,
            "unit": "ns",
            "range": "± 34203.450284964114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2480156.6666666665,
            "unit": "ns",
            "range": "± 110728.91981598943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1711730.612244898,
            "unit": "ns",
            "range": "± 160416.0437564356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4693709.278350515,
            "unit": "ns",
            "range": "± 414241.99652358866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45703.333333333336,
            "unit": "ns",
            "range": "± 2752.8718406032854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7296274.074074074,
            "unit": "ns",
            "range": "± 179370.33155027573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19605104.166666668,
            "unit": "ns",
            "range": "± 448375.32946053194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47723423.07692308,
            "unit": "ns",
            "range": "± 435063.7944674439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96684951.85185185,
            "unit": "ns",
            "range": "± 2708372.1018027347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198334823.68421054,
            "unit": "ns",
            "range": "± 6767780.962625234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4483761.666666667,
            "unit": "ns",
            "range": "± 50799.91033219332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1395707.8125,
            "unit": "ns",
            "range": "± 5058.451871886078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1067915.1041666667,
            "unit": "ns",
            "range": "± 6216.917713920344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630020.9895833335,
            "unit": "ns",
            "range": "± 13250.955793731575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817991.2667410715,
            "unit": "ns",
            "range": "± 2707.376603004145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758395.0846354166,
            "unit": "ns",
            "range": "± 10489.05772845187"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3078609.8039215687,
            "unit": "ns",
            "range": "± 112632.54281938584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3295775.5102040814,
            "unit": "ns",
            "range": "± 200278.18440020928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3931557.1428571427,
            "unit": "ns",
            "range": "± 67144.47928833091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3564241.7721518986,
            "unit": "ns",
            "range": "± 178940.7426679648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5783945,
            "unit": "ns",
            "range": "± 203152.90559399355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244234.78260869565,
            "unit": "ns",
            "range": "± 9278.055768348222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235856.89655172414,
            "unit": "ns",
            "range": "± 10287.72240609651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210350.98039215687,
            "unit": "ns",
            "range": "± 8503.890228572323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3975086.6666666665,
            "unit": "ns",
            "range": "± 70500.33299482317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3838177.777777778,
            "unit": "ns",
            "range": "± 104767.0725332129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19114.736842105263,
            "unit": "ns",
            "range": "± 1514.747954671473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83795.8762886598,
            "unit": "ns",
            "range": "± 6635.964472820518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69818.18181818182,
            "unit": "ns",
            "range": "± 3834.014295974206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81908.16326530612,
            "unit": "ns",
            "range": "± 13855.55583581768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4735.416666666667,
            "unit": "ns",
            "range": "± 545.0213258341689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18735.483870967742,
            "unit": "ns",
            "range": "± 1418.1007783905236"
          }
        ]
      }
    ]
  }
}