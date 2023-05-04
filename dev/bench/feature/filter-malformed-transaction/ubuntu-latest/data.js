window.BENCHMARK_DATA = {
  "lastUpdate": 1683187850045,
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
      }
    ]
  }
}