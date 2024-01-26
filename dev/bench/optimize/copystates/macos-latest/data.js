window.BENCHMARK_DATA = {
  "lastUpdate": 1706246748686,
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
          "id": "5cd331a36bb4120f25597dd64c068da738482897",
          "message": "Use Stack instead of Queue internally",
          "timestamp": "2024-01-26T14:08:20+09:00",
          "tree_id": "49577e08dc19e0fe9c4d3cb94ecd84e64d090d7a",
          "url": "https://github.com/greymistcube/libplanet/commit/5cd331a36bb4120f25597dd64c068da738482897"
        },
        "date": 1706246730496,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7689759.148148148,
            "unit": "ns",
            "range": "± 209548.58753900632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19952884.86585366,
            "unit": "ns",
            "range": "± 1051804.4944023844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48757384.196078435,
            "unit": "ns",
            "range": "± 1981127.7939435001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96908587.16,
            "unit": "ns",
            "range": "± 2313319.6930215294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199526068.76190478,
            "unit": "ns",
            "range": "± 4572014.547210681"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39135.45652173913,
            "unit": "ns",
            "range": "± 7524.504679274148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 238042.53846153847,
            "unit": "ns",
            "range": "± 35261.668436075546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221483.55555555556,
            "unit": "ns",
            "range": "± 19747.82571454222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202542.98888888888,
            "unit": "ns",
            "range": "± 21277.021136382726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3912880.8214285714,
            "unit": "ns",
            "range": "± 165472.61643185525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3495486.6086956523,
            "unit": "ns",
            "range": "± 86609.0755200102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17599.050561797754,
            "unit": "ns",
            "range": "± 3986.8396689244864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92851.97959183673,
            "unit": "ns",
            "range": "± 19393.536007410137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86057.20707070707,
            "unit": "ns",
            "range": "± 19073.022455200487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92049.91489361702,
            "unit": "ns",
            "range": "± 23105.792576177173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6581.595744680851,
            "unit": "ns",
            "range": "± 1205.4287602802292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17642.988505747126,
            "unit": "ns",
            "range": "± 3924.5914718345625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1119160.4583333333,
            "unit": "ns",
            "range": "± 125917.79154126642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2671230.3229166665,
            "unit": "ns",
            "range": "± 367030.49362835457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1984878.3406593406,
            "unit": "ns",
            "range": "± 370161.43745026895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8075196.87113402,
            "unit": "ns",
            "range": "± 1094195.0629196498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3015653.2333333334,
            "unit": "ns",
            "range": "± 206772.8304462235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3003678,
            "unit": "ns",
            "range": "± 63998.030875268065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3645222.8285714285,
            "unit": "ns",
            "range": "± 171067.24740652592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3542224.765957447,
            "unit": "ns",
            "range": "± 229562.57458116236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13577035.8989899,
            "unit": "ns",
            "range": "± 2174761.091316443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5075873.191984953,
            "unit": "ns",
            "range": "± 141007.14591568147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1464037.8484802246,
            "unit": "ns",
            "range": "± 66821.79107925337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 920451.4225667318,
            "unit": "ns",
            "range": "± 22800.876565860253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2272654.338010204,
            "unit": "ns",
            "range": "± 195583.52127485126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 665367.0140190972,
            "unit": "ns",
            "range": "± 21259.90929478344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 602344.4555338542,
            "unit": "ns",
            "range": "± 11037.348761075322"
          }
        ]
      }
    ]
  }
}