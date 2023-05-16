window.BENCHMARK_DATA = {
  "lastUpdate": 1684228362327,
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
          "id": "08a655440560c84133dc3ab77232015512ec2f44",
          "message": "Prepare 1.2.1",
          "timestamp": "2023-05-16T17:59:22+09:00",
          "tree_id": "42e66b107c4b4ca1ce58e4c972c15d296fb64218",
          "url": "https://github.com/greymistcube/libplanet/commit/08a655440560c84133dc3ab77232015512ec2f44"
        },
        "date": 1684228354383,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3426798.6875,
            "unit": "ns",
            "range": "± 61311.85899070288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3833474.6363636362,
            "unit": "ns",
            "range": "± 92437.37886423459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4621434.3125,
            "unit": "ns",
            "range": "± 85188.67868030255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4560511.942307692,
            "unit": "ns",
            "range": "± 186586.1979114099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7156600.333333333,
            "unit": "ns",
            "range": "± 225873.70419795255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289674.84444444446,
            "unit": "ns",
            "range": "± 10978.641207850225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277273.0416666667,
            "unit": "ns",
            "range": "± 7038.953352774561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240836.72972972973,
            "unit": "ns",
            "range": "± 8098.154126605536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4457027.266666667,
            "unit": "ns",
            "range": "± 48582.82404522738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3998500.714285714,
            "unit": "ns",
            "range": "± 43922.69223118233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19230.427083333332,
            "unit": "ns",
            "range": "± 1515.1013288663094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88804.24242424243,
            "unit": "ns",
            "range": "± 4172.914716673949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78104.47777777778,
            "unit": "ns",
            "range": "± 4359.4000520837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97195.21428571429,
            "unit": "ns",
            "range": "± 11976.606515788211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5093.907216494846,
            "unit": "ns",
            "range": "± 724.859240394216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18090.41304347826,
            "unit": "ns",
            "range": "± 1358.2606941359202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5958738.876041667,
            "unit": "ns",
            "range": "± 29913.18727805005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865739.0401785714,
            "unit": "ns",
            "range": "± 2282.986354825112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375922.2881510416,
            "unit": "ns",
            "range": "± 3898.8439782454466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2591681.499441964,
            "unit": "ns",
            "range": "± 1405.9588056314283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833917.3018275669,
            "unit": "ns",
            "range": "± 511.22873929721345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761408.7009765625,
            "unit": "ns",
            "range": "± 390.11120665424676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7886757.466666667,
            "unit": "ns",
            "range": "± 139174.1709692605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21978594.2,
            "unit": "ns",
            "range": "± 229911.3376689868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54804499.53333333,
            "unit": "ns",
            "range": "± 585183.8022603139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107866667,
            "unit": "ns",
            "range": "± 1605152.2803227825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215766232.46666667,
            "unit": "ns",
            "range": "± 3142195.553206999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447123.06,
            "unit": "ns",
            "range": "± 101437.66849665252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2838354.619047619,
            "unit": "ns",
            "range": "± 101949.83726298389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2310027.0416666665,
            "unit": "ns",
            "range": "± 129022.57649948967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5591349.80952381,
            "unit": "ns",
            "range": "± 204319.69162746725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49431.30487804878,
            "unit": "ns",
            "range": "± 2586.7113287907537"
          }
        ]
      }
    ]
  }
}