window.BENCHMARK_DATA = {
  "lastUpdate": 1687446352245,
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
          "id": "e5844dd33f6dc8fd839162f13fabf07ba45790f5",
          "message": "Prepare 2.1.2",
          "timestamp": "2023-06-22T23:48:44+09:00",
          "tree_id": "eec1297b63193313b8d4c6d719ea52a649f84825",
          "url": "https://github.com/greymistcube/libplanet/commit/e5844dd33f6dc8fd839162f13fabf07ba45790f5"
        },
        "date": 1687446331008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1457877.551020408,
            "unit": "ns",
            "range": "± 130719.87404457414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2698137.037037037,
            "unit": "ns",
            "range": "± 112717.16699088668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2297236.170212766,
            "unit": "ns",
            "range": "± 135350.52847834973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5577062.711864407,
            "unit": "ns",
            "range": "± 243696.33654959075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49990.721649484534,
            "unit": "ns",
            "range": "± 4516.660881166962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7396807.142857143,
            "unit": "ns",
            "range": "± 121636.40310548303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20810680,
            "unit": "ns",
            "range": "± 369496.4879013447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52521553.333333336,
            "unit": "ns",
            "range": "± 976001.4357912936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105266753.33333333,
            "unit": "ns",
            "range": "± 1225642.2030142092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210623233.33333334,
            "unit": "ns",
            "range": "± 2795269.8606412807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4906233.314732143,
            "unit": "ns",
            "range": "± 18496.998221598154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1575806.2239583333,
            "unit": "ns",
            "range": "± 7588.022663887069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1212926.6075721155,
            "unit": "ns",
            "range": "± 3766.8871644732053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2687861.328125,
            "unit": "ns",
            "range": "± 10820.546999376818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852032.91015625,
            "unit": "ns",
            "range": "± 3587.7631712294224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782249.27734375,
            "unit": "ns",
            "range": "± 5318.717281720558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3358431.0344827585,
            "unit": "ns",
            "range": "± 97381.8298666509"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3673893.3333333335,
            "unit": "ns",
            "range": "± 63906.98001969812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4394631.707317073,
            "unit": "ns",
            "range": "± 158412.65801542564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4412680.645161291,
            "unit": "ns",
            "range": "± 134534.10576096762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6931759.523809524,
            "unit": "ns",
            "range": "± 248739.3278107982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271569.4915254237,
            "unit": "ns",
            "range": "± 10777.502977343644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260642.85714285713,
            "unit": "ns",
            "range": "± 8140.251684007787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238179.5918367347,
            "unit": "ns",
            "range": "± 17216.869928676457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4205433.333333333,
            "unit": "ns",
            "range": "± 77046.97701186378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3859552.6315789474,
            "unit": "ns",
            "range": "± 83405.51119827521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20593.617021276597,
            "unit": "ns",
            "range": "± 1721.390317721033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95053.53535353535,
            "unit": "ns",
            "range": "± 8312.927148838768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80737.5,
            "unit": "ns",
            "range": "± 6340.002490452773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98596.38554216867,
            "unit": "ns",
            "range": "± 9478.64667945455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5819.587628865979,
            "unit": "ns",
            "range": "± 1078.44787921285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20346.808510638297,
            "unit": "ns",
            "range": "± 2236.6306325796077"
          }
        ]
      }
    ]
  }
}