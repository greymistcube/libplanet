window.BENCHMARK_DATA = {
  "lastUpdate": 1708327529687,
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
          "id": "2e3cefe3e9af512f442b623c2eba6bf0e057cb53",
          "message": "Remove fee processing from ActionEvaluator",
          "timestamp": "2024-02-19T16:07:00+09:00",
          "tree_id": "2fa80e49b49aae078f536a6ec10df13691425a4e",
          "url": "https://github.com/greymistcube/libplanet/commit/2e3cefe3e9af512f442b623c2eba6bf0e057cb53"
        },
        "date": 1708327511039,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992297.9381443299,
            "unit": "ns",
            "range": "± 114917.40691632027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1704601.6949152541,
            "unit": "ns",
            "range": "± 70978.29073525526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1555180.808080808,
            "unit": "ns",
            "range": "± 187140.2086381659"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11012591.111111112,
            "unit": "ns",
            "range": "± 875625.0310357051"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34217.142857142855,
            "unit": "ns",
            "range": "± 1675.135419883491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5027900,
            "unit": "ns",
            "range": "± 30588.308475373648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13221926.666666666,
            "unit": "ns",
            "range": "± 101439.4433475789"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32630330,
            "unit": "ns",
            "range": "± 435419.9962597689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64677821.428571425,
            "unit": "ns",
            "range": "± 844342.8570638382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133395386.66666667,
            "unit": "ns",
            "range": "± 1547335.4128337926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3358408.7740384615,
            "unit": "ns",
            "range": "± 7563.62282667946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068762.0572916667,
            "unit": "ns",
            "range": "± 2416.1477505152534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781800.4069010416,
            "unit": "ns",
            "range": "± 999.3173339707862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937000.811298077,
            "unit": "ns",
            "range": "± 2394.681235593034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627293.2547433035,
            "unit": "ns",
            "range": "± 1969.161744697192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566494.9288504465,
            "unit": "ns",
            "range": "± 2309.9105290157395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171746.153846154,
            "unit": "ns",
            "range": "± 55105.587598857746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2329419.565217391,
            "unit": "ns",
            "range": "± 87173.15493905784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2801619.0476190476,
            "unit": "ns",
            "range": "± 63548.860092432966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2889559.090909091,
            "unit": "ns",
            "range": "± 43549.75981663481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12486301.086956521,
            "unit": "ns",
            "range": "± 1484423.368675976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171865.55555555556,
            "unit": "ns",
            "range": "± 10216.797813065436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163653.84615384616,
            "unit": "ns",
            "range": "± 7597.801427943581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141995.1219512195,
            "unit": "ns",
            "range": "± 5017.8656428561435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2847635.714285714,
            "unit": "ns",
            "range": "± 49109.69835508535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2516926.6666666665,
            "unit": "ns",
            "range": "± 42355.69563094145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10934.736842105263,
            "unit": "ns",
            "range": "± 1500.9052885943026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52981.818181818184,
            "unit": "ns",
            "range": "± 3657.0054156700858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43696.2962962963,
            "unit": "ns",
            "range": "± 1841.6525559852912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60546.39175257732,
            "unit": "ns",
            "range": "± 12495.599740972735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2412.6315789473683,
            "unit": "ns",
            "range": "± 403.5064673644367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10266.304347826086,
            "unit": "ns",
            "range": "± 1476.2052013403845"
          }
        ]
      }
    ]
  }
}