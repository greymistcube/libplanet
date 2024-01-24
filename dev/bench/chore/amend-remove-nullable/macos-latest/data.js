window.BENCHMARK_DATA = {
  "lastUpdate": 1706064510185,
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
          "id": "b1b89e1352beda6d98cf3364169c503b376bacf3",
          "message": "Better explanation for block query arguments",
          "timestamp": "2024-01-24T11:25:25+09:00",
          "tree_id": "e199c212de2f35bc7831f9b023ddda2fc04c0d0a",
          "url": "https://github.com/greymistcube/libplanet/commit/b1b89e1352beda6d98cf3364169c503b376bacf3"
        },
        "date": 1706064495584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9417508.957142858,
            "unit": "ns",
            "range": "± 453254.7116735586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21809423.54,
            "unit": "ns",
            "range": "± 578490.6539659536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54521837.166666664,
            "unit": "ns",
            "range": "± 970951.1542126151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110120243.125,
            "unit": "ns",
            "range": "± 2120456.1403512177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244961904.46153846,
            "unit": "ns",
            "range": "± 3811906.518468998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81399.94565217392,
            "unit": "ns",
            "range": "± 5948.506292079042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351066.6195652174,
            "unit": "ns",
            "range": "± 32347.993511442346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346079.2315789474,
            "unit": "ns",
            "range": "± 35851.62292105422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315797.77906976745,
            "unit": "ns",
            "range": "± 18200.331131054387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4576116.9655172415,
            "unit": "ns",
            "range": "± 133566.9335813329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4078643.81443299,
            "unit": "ns",
            "range": "± 284607.7741057759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29469.68085106383,
            "unit": "ns",
            "range": "± 2736.106836886159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124374.77173913043,
            "unit": "ns",
            "range": "± 7265.437308035543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122855.18518518518,
            "unit": "ns",
            "range": "± 5170.429112785748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126364.4693877551,
            "unit": "ns",
            "range": "± 14363.45421113396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9609.183673469388,
            "unit": "ns",
            "range": "± 1483.9140817442017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29275.340206185567,
            "unit": "ns",
            "range": "± 4096.038100730688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1536511.402173913,
            "unit": "ns",
            "range": "± 179714.44454510373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3000672.177777778,
            "unit": "ns",
            "range": "± 213535.8621537453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2725963.411764706,
            "unit": "ns",
            "range": "± 292352.98548115615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 33602911.0257732,
            "unit": "ns",
            "range": "± 8319420.624123489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3234310.9166666665,
            "unit": "ns",
            "range": "± 153627.42489595397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3645349.5721649486,
            "unit": "ns",
            "range": "± 298437.1177552264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4493810.230769231,
            "unit": "ns",
            "range": "± 208816.75922128538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4652650.572916667,
            "unit": "ns",
            "range": "± 308339.64837195684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32832295.84,
            "unit": "ns",
            "range": "± 4283218.261289561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6947871.404127038,
            "unit": "ns",
            "range": "± 858061.30999357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831148.882982337,
            "unit": "ns",
            "range": "± 45459.71223085174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157182.478515625,
            "unit": "ns",
            "range": "± 22929.210263700727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2833402.984898518,
            "unit": "ns",
            "range": "± 203558.6685252649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812429.3059895834,
            "unit": "ns",
            "range": "± 12319.10614928752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 822997.527734375,
            "unit": "ns",
            "range": "± 21533.393690111705"
          }
        ]
      }
    ]
  }
}