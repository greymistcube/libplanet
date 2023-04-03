window.BENCHMARK_DATA = {
  "lastUpdate": 1680491814707,
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
          "id": "67584a37ecc8290d90c7187c20873cebde4bfb9f",
          "message": "Cleanup",
          "timestamp": "2023-04-03T12:00:11+09:00",
          "tree_id": "fc3ffe1d75b58e05732d3132cfee91799ea557cd",
          "url": "https://github.com/greymistcube/libplanet/commit/67584a37ecc8290d90c7187c20873cebde4bfb9f"
        },
        "date": 1680491800768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8049997.326086956,
            "unit": "ns",
            "range": "± 307540.8291976353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20602748.5,
            "unit": "ns",
            "range": "± 531063.6641672847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51166834.733333334,
            "unit": "ns",
            "range": "± 1399878.1805082967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99390239.375,
            "unit": "ns",
            "range": "± 2527288.721461931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216344543.79411766,
            "unit": "ns",
            "range": "± 4267430.22337511"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74506.93684210526,
            "unit": "ns",
            "range": "± 12572.236868973861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 402235.8,
            "unit": "ns",
            "range": "± 15911.896671474255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334754.85507246375,
            "unit": "ns",
            "range": "± 16149.939396421862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336030.6,
            "unit": "ns",
            "range": "± 14994.70261283823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5590605.7105263155,
            "unit": "ns",
            "range": "± 121040.66776986749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4132114.4,
            "unit": "ns",
            "range": "± 74329.86085666668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25556.10824742268,
            "unit": "ns",
            "range": "± 4052.3078109802154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105357.24489795919,
            "unit": "ns",
            "range": "± 13766.781478228804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103335.29591836735,
            "unit": "ns",
            "range": "± 16722.735005405488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 264259.1304347826,
            "unit": "ns",
            "range": "± 22661.489262825897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7890.989130434783,
            "unit": "ns",
            "range": "± 1072.8337181006855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17807.41176470588,
            "unit": "ns",
            "range": "± 1295.7177758377202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597458.0707070706,
            "unit": "ns",
            "range": "± 143499.77589097572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2993653.214285714,
            "unit": "ns",
            "range": "± 130267.47908369254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2622734.3571428573,
            "unit": "ns",
            "range": "± 255550.55056380507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7322992.410526316,
            "unit": "ns",
            "range": "± 433702.04505119054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3378521.1842105263,
            "unit": "ns",
            "range": "± 77601.20988603181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3657741.7989690723,
            "unit": "ns",
            "range": "± 275266.0637278264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4596175.293103448,
            "unit": "ns",
            "range": "± 133768.17732271523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4858407.947916667,
            "unit": "ns",
            "range": "± 470639.1569902823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9276859.825,
            "unit": "ns",
            "range": "± 481745.0257675912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6650133.409765625,
            "unit": "ns",
            "range": "± 149898.93652349524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837461.8721354166,
            "unit": "ns",
            "range": "± 30473.804680790534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291525.0721153845,
            "unit": "ns",
            "range": "± 12031.751496923313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2474246.922679228,
            "unit": "ns",
            "range": "± 42630.772221927386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831929.0412760417,
            "unit": "ns",
            "range": "± 7904.491860505725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730201.0861328125,
            "unit": "ns",
            "range": "± 2732.2427503159765"
          }
        ]
      }
    ]
  }
}