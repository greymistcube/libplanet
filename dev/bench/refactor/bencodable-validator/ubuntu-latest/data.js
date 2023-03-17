window.BENCHMARK_DATA = {
  "lastUpdate": 1679023231345,
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
          "id": "c10340be1d1cf8d232366c9d043a037d5cbd069b",
          "message": "Implemented IBencodable for ValidatorSet",
          "timestamp": "2023-03-17T12:04:50+09:00",
          "tree_id": "3a3a70c1894955d5d610a7a0355f6131318e3cc3",
          "url": "https://github.com/greymistcube/libplanet/commit/c10340be1d1cf8d232366c9d043a037d5cbd069b"
        },
        "date": 1679023224710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3326631.1,
            "unit": "ns",
            "range": "± 69649.17558578096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5287046,
            "unit": "ns",
            "range": "± 110063.74678072597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25209874.96153846,
            "unit": "ns",
            "range": "± 687660.9697336897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6456966.185185186,
            "unit": "ns",
            "range": "± 175444.22573373723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27925356.866666667,
            "unit": "ns",
            "range": "± 502980.5795299324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7786353.133333334,
            "unit": "ns",
            "range": "± 45218.5962107037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21608687,
            "unit": "ns",
            "range": "± 265642.2171942125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53916419.6,
            "unit": "ns",
            "range": "± 759277.6108352502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107715800.94736843,
            "unit": "ns",
            "range": "± 2249331.120696908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 212633258.4,
            "unit": "ns",
            "range": "± 2073931.6352179227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410574.711111111,
            "unit": "ns",
            "range": "± 78489.20882963543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2612694.411764706,
            "unit": "ns",
            "range": "± 53524.740090516585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2220012.2083333335,
            "unit": "ns",
            "range": "± 87282.4353178777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5706018.6,
            "unit": "ns",
            "range": "± 325665.3416774029"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47190.633802816905,
            "unit": "ns",
            "range": "± 2232.6301225200523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5908152.014583333,
            "unit": "ns",
            "range": "± 34830.05476501559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851600.8530970982,
            "unit": "ns",
            "range": "± 4411.757926635931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368118.6970052083,
            "unit": "ns",
            "range": "± 5655.040046701628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609719.4140625,
            "unit": "ns",
            "range": "± 4843.092920619713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824135.2820963542,
            "unit": "ns",
            "range": "± 950.6958072844262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760145.3223307292,
            "unit": "ns",
            "range": "± 1141.8204651799915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202874.3023255814,
            "unit": "ns",
            "range": "± 7117.899671936685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199812.19512195123,
            "unit": "ns",
            "range": "± 7210.5227904067815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165516.2857142857,
            "unit": "ns",
            "range": "± 2791.15557619948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11988740.368421054,
            "unit": "ns",
            "range": "± 264198.17343956255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9690922.357142856,
            "unit": "ns",
            "range": "± 110911.84563677112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20824.90322580645,
            "unit": "ns",
            "range": "± 1461.8018219375417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56299.425531914894,
            "unit": "ns",
            "range": "± 4061.6433124562623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40139.30434782609,
            "unit": "ns",
            "range": "± 960.9860671954997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99212.08163265306,
            "unit": "ns",
            "range": "± 15631.779101886472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5537.936842105263,
            "unit": "ns",
            "range": "± 647.7561895304651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19705.381443298967,
            "unit": "ns",
            "range": "± 2037.538887375828"
          }
        ]
      }
    ]
  }
}