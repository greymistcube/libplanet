window.BENCHMARK_DATA = {
  "lastUpdate": 1678872846646,
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
          "id": "23388947245416bf15682b5711eb1f909b907d5a",
          "message": "Prepare 0.51.3",
          "timestamp": "2023-03-15T18:21:01+09:00",
          "tree_id": "47dbbdaffe5d3c55e1f6518e77cde938901434ba",
          "url": "https://github.com/greymistcube/libplanet/commit/23388947245416bf15682b5711eb1f909b907d5a"
        },
        "date": 1678872838405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193754.88095238095,
            "unit": "ns",
            "range": "± 7024.15991401656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196635.54054054053,
            "unit": "ns",
            "range": "± 6600.729899011147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164594.58620689655,
            "unit": "ns",
            "range": "± 4702.62868371997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11353260,
            "unit": "ns",
            "range": "± 42506.17233188249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9004816.642857144,
            "unit": "ns",
            "range": "± 46771.060078457034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18986.360824742267,
            "unit": "ns",
            "range": "± 1815.0573291311339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56036.791666666664,
            "unit": "ns",
            "range": "± 5454.515965628687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39889.46666666667,
            "unit": "ns",
            "range": "± 1083.1099454916794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89600.01041666667,
            "unit": "ns",
            "range": "± 11388.20059303746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4745.867346938776,
            "unit": "ns",
            "range": "± 531.1204968947768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16408.242105263158,
            "unit": "ns",
            "range": "± 1208.3783903970227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3319634.1333333333,
            "unit": "ns",
            "range": "± 38109.688471693444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5267188.133333334,
            "unit": "ns",
            "range": "± 153326.26671628715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24056003.866666667,
            "unit": "ns",
            "range": "± 215235.94566623413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6483827.133333334,
            "unit": "ns",
            "range": "± 79665.07133517232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27505294.2,
            "unit": "ns",
            "range": "± 296348.5233213469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5959922.827604166,
            "unit": "ns",
            "range": "± 29351.40987406898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2004039.29453125,
            "unit": "ns",
            "range": "± 1049.7030051075803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342597.0200520833,
            "unit": "ns",
            "range": "± 573.490573450421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582686.884765625,
            "unit": "ns",
            "range": "± 2099.3750725359077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829528.2694614956,
            "unit": "ns",
            "range": "± 532.7282518994379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755806.625,
            "unit": "ns",
            "range": "± 401.15472802849166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7735955.333333333,
            "unit": "ns",
            "range": "± 74471.04317946738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20390529.133333333,
            "unit": "ns",
            "range": "± 124176.0267885108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50860513.92307692,
            "unit": "ns",
            "range": "± 162315.7263403958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104341356.93333334,
            "unit": "ns",
            "range": "± 1461676.9370729863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 202971216.85714287,
            "unit": "ns",
            "range": "± 1138900.89368984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46890.329545454544,
            "unit": "ns",
            "range": "± 2578.706842994282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367602.1666666667,
            "unit": "ns",
            "range": "± 71618.8913847049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2555488.4444444445,
            "unit": "ns",
            "range": "± 81765.92722310415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2167969.712328767,
            "unit": "ns",
            "range": "± 105462.81091712421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5091136.619047619,
            "unit": "ns",
            "range": "± 118582.77898602148"
          }
        ]
      }
    ]
  }
}