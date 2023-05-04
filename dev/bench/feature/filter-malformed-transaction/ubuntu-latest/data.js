window.BENCHMARK_DATA = {
  "lastUpdate": 1683188227815,
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
          "id": "3a5c9a2204574574a02c1ec799a1e3f6b2885b5e",
          "message": "Added test",
          "timestamp": "2023-05-04T16:54:14+09:00",
          "tree_id": "f3fcd1efcc43b9616c4dce4595871a2f85485482",
          "url": "https://github.com/greymistcube/libplanet/commit/3a5c9a2204574574a02c1ec799a1e3f6b2885b5e"
        },
        "date": 1683187841240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 352616.0714285714,
            "unit": "ns",
            "range": "± 7975.2047735399365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340522.2083333333,
            "unit": "ns",
            "range": "± 12815.594745429415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299916.36363636365,
            "unit": "ns",
            "range": "± 14075.072913746228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5110083.4,
            "unit": "ns",
            "range": "± 60129.44446513467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4614652.666666667,
            "unit": "ns",
            "range": "± 93453.45579673842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26624.326315789473,
            "unit": "ns",
            "range": "± 2447.3963431512934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115842.76288659793,
            "unit": "ns",
            "range": "± 8489.07181539546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103787.07216494845,
            "unit": "ns",
            "range": "± 8222.867779916443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121581.41758241758,
            "unit": "ns",
            "range": "± 10536.075084168817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7380.979381443299,
            "unit": "ns",
            "range": "± 1001.7802484762382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24754.510869565216,
            "unit": "ns",
            "range": "± 2693.9093758245244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4106764.4,
            "unit": "ns",
            "range": "± 71617.27141628817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4443759.666666667,
            "unit": "ns",
            "range": "± 69656.23815943414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5025765.285714285,
            "unit": "ns",
            "range": "± 82708.92900121167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5404893.178571428,
            "unit": "ns",
            "range": "± 150888.32933173623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8351089.230769231,
            "unit": "ns",
            "range": "± 224092.37866974552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7099846.972395834,
            "unit": "ns",
            "range": "± 43933.28614068064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2251275.0518973214,
            "unit": "ns",
            "range": "± 4487.1644193610655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1617953.618359375,
            "unit": "ns",
            "range": "± 3795.879200703549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3093640.8408854166,
            "unit": "ns",
            "range": "± 5010.92274814115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 997484.1275111607,
            "unit": "ns",
            "range": "± 949.376546187493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915450.7726702009,
            "unit": "ns",
            "range": "± 1465.836940635713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60192.96875,
            "unit": "ns",
            "range": "± 4158.0749327521235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10404095.52,
            "unit": "ns",
            "range": "± 254677.73150380986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27898773,
            "unit": "ns",
            "range": "± 198255.7326643689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65280493.13333333,
            "unit": "ns",
            "range": "± 669567.2233936811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138167531.13333333,
            "unit": "ns",
            "range": "± 772529.239747862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284993386.2307692,
            "unit": "ns",
            "range": "± 902177.0878758739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1735585.2386363635,
            "unit": "ns",
            "range": "± 95329.43715878828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3256826.0512820515,
            "unit": "ns",
            "range": "± 112805.00890310183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2738918.8421052634,
            "unit": "ns",
            "range": "± 152403.9467111478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6808104.16,
            "unit": "ns",
            "range": "± 416077.59554071614"
          }
        ]
      },
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
          "id": "82c2810beda849f7b86f0b5b2a1801929f61891b",
          "message": "Changelog",
          "timestamp": "2023-05-04T16:58:06+09:00",
          "tree_id": "b1f02694d62073f9fb59d608a5c2a8b1ae63bba1",
          "url": "https://github.com/greymistcube/libplanet/commit/82c2810beda849f7b86f0b5b2a1801929f61891b"
        },
        "date": 1683188218159,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 386729.4,
            "unit": "ns",
            "range": "± 30310.6428904773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 363885.1182795699,
            "unit": "ns",
            "range": "± 22226.090180553994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 345913.9456521739,
            "unit": "ns",
            "range": "± 30994.725239068754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5638209.869565218,
            "unit": "ns",
            "range": "± 135819.69253131296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5084232.864864865,
            "unit": "ns",
            "range": "± 168411.4777935878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25722.55319148936,
            "unit": "ns",
            "range": "± 6149.502302821674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127506.04,
            "unit": "ns",
            "range": "± 17316.057670581635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104120.15463917526,
            "unit": "ns",
            "range": "± 13379.357909465896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124212.78723404255,
            "unit": "ns",
            "range": "± 20492.019712310637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7779.115789473684,
            "unit": "ns",
            "range": "± 1321.891704316027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25733.45054945055,
            "unit": "ns",
            "range": "± 4390.473298363012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4265619.273809524,
            "unit": "ns",
            "range": "± 227009.33386114493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4584837.680412371,
            "unit": "ns",
            "range": "± 282248.7037452352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5614229.473118279,
            "unit": "ns",
            "range": "± 317635.87719494815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5758483.232876712,
            "unit": "ns",
            "range": "± 286498.2123619099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9398429.93,
            "unit": "ns",
            "range": "± 553337.4737451201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7494042.210416666,
            "unit": "ns",
            "range": "± 101439.45618404262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2356665.1727120536,
            "unit": "ns",
            "range": "± 33331.632386054174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1734445.6876302084,
            "unit": "ns",
            "range": "± 32320.787968049466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3324586.4700520835,
            "unit": "ns",
            "range": "± 24949.981387048727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1107016.7177734375,
            "unit": "ns",
            "range": "± 20280.512494153387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999417.9886259191,
            "unit": "ns",
            "range": "± 19826.00417444646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72457,
            "unit": "ns",
            "range": "± 12771.95459818365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9964584.757575758,
            "unit": "ns",
            "range": "± 469006.81428518746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26521643.074074075,
            "unit": "ns",
            "range": "± 728820.1779902136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70404565.55882353,
            "unit": "ns",
            "range": "± 2072033.465589141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144170949.8,
            "unit": "ns",
            "range": "± 2195921.730065181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283636544.8947368,
            "unit": "ns",
            "range": "± 6295425.441024996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1846862.3917525774,
            "unit": "ns",
            "range": "± 182343.07568418916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3655779.025,
            "unit": "ns",
            "range": "± 190705.9480484619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2884013.6907216497,
            "unit": "ns",
            "range": "± 202694.28696620106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7465867.869565218,
            "unit": "ns",
            "range": "± 357973.51536740456"
          }
        ]
      }
    ]
  }
}