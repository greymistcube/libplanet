window.BENCHMARK_DATA = {
  "lastUpdate": 1695346633247,
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
          "id": "78a827619806b8941cbc96d3f51f5e4d9257911f",
          "message": "Remove clutter",
          "timestamp": "2023-09-22T10:02:17+09:00",
          "tree_id": "e99e29b817674d96659443d5dc38aa9a9006f502",
          "url": "https://github.com/greymistcube/libplanet/commit/78a827619806b8941cbc96d3f51f5e4d9257911f"
        },
        "date": 1695346610010,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1285508.4210526317,
            "unit": "ns",
            "range": "± 83690.45252133055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2473726.388888889,
            "unit": "ns",
            "range": "± 121237.12650469015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1752571.1340206186,
            "unit": "ns",
            "range": "± 140025.58617294053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5769702,
            "unit": "ns",
            "range": "± 371670.9829834974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46928.88888888889,
            "unit": "ns",
            "range": "± 2534.181801537913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7283406.666666667,
            "unit": "ns",
            "range": "± 83968.64607583906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19969100,
            "unit": "ns",
            "range": "± 225950.8694044247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50584852.941176474,
            "unit": "ns",
            "range": "± 973911.3358756325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101146080,
            "unit": "ns",
            "range": "± 1483655.073121782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198576340,
            "unit": "ns",
            "range": "± 3530868.18032862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4469031.354166667,
            "unit": "ns",
            "range": "± 29443.25455385373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1408809.3619791667,
            "unit": "ns",
            "range": "± 5486.692312898332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1060785.859375,
            "unit": "ns",
            "range": "± 5524.910270194073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664761.886160714,
            "unit": "ns",
            "range": "± 7504.999688387395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813943.2942708334,
            "unit": "ns",
            "range": "± 3141.839570301889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771996.6796875,
            "unit": "ns",
            "range": "± 2960.2201812367844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3166151.4285714286,
            "unit": "ns",
            "range": "± 103487.00507062417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3283830,
            "unit": "ns",
            "range": "± 96105.79353880878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3977723.076923077,
            "unit": "ns",
            "range": "± 105214.9848935685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3595973.3333333335,
            "unit": "ns",
            "range": "± 106128.3410857307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5778438.095238095,
            "unit": "ns",
            "range": "± 206995.11241122833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242810.14492753622,
            "unit": "ns",
            "range": "± 11632.196000851109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241538.29787234042,
            "unit": "ns",
            "range": "± 9373.077847971059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215671.01449275363,
            "unit": "ns",
            "range": "± 10361.809140374648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3939042.8571428573,
            "unit": "ns",
            "range": "± 60710.646820493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3648500,
            "unit": "ns",
            "range": "± 49198.73691758473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20126.96629213483,
            "unit": "ns",
            "range": "± 1403.3858444477498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81253.2258064516,
            "unit": "ns",
            "range": "± 5353.248741629849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68909.09090909091,
            "unit": "ns",
            "range": "± 1509.5439522329066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84403.0303030303,
            "unit": "ns",
            "range": "± 14199.77331340658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5029.591836734694,
            "unit": "ns",
            "range": "± 706.2255099191118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18122.340425531915,
            "unit": "ns",
            "range": "± 1578.3586312640855"
          }
        ]
      }
    ]
  }
}