window.BENCHMARK_DATA = {
  "lastUpdate": 1688020608245,
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
          "id": "0bd22b8deafcf87e5fad43b9a49cc9c73e5bf719",
          "message": "Prepare 2.3.1",
          "timestamp": "2023-06-29T15:22:24+09:00",
          "tree_id": "6f08e98fa366bfb1d100cf7f23172cbaf3198b47",
          "url": "https://github.com/greymistcube/libplanet/commit/0bd22b8deafcf87e5fad43b9a49cc9c73e5bf719"
        },
        "date": 1688020586105,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1364491,
            "unit": "ns",
            "range": "± 142298.15411893636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2398214.6341463416,
            "unit": "ns",
            "range": "± 84497.96909090658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2125539,
            "unit": "ns",
            "range": "± 143707.03355764947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4929203.636363637,
            "unit": "ns",
            "range": "± 206535.0180725673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42691.17647058824,
            "unit": "ns",
            "range": "± 2050.099036131076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6762500,
            "unit": "ns",
            "range": "± 26900.607656848428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17380640,
            "unit": "ns",
            "range": "± 104782.35129475356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44578890,
            "unit": "ns",
            "range": "± 473202.2412699005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89345066.66666667,
            "unit": "ns",
            "range": "± 785628.9297359762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177563033.33333334,
            "unit": "ns",
            "range": "± 1708375.3258021271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4790985.442708333,
            "unit": "ns",
            "range": "± 14893.513924394623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1506992.55859375,
            "unit": "ns",
            "range": "± 2420.905783570944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150640.9114583333,
            "unit": "ns",
            "range": "± 1455.4891667351399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589122.628348214,
            "unit": "ns",
            "range": "± 11643.308848479237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818373.5091145834,
            "unit": "ns",
            "range": "± 1009.5432466673357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740119.5833333334,
            "unit": "ns",
            "range": "± 1036.2605689429722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2917856.25,
            "unit": "ns",
            "range": "± 54283.47776564554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3039085,
            "unit": "ns",
            "range": "± 51299.00059005499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4005420,
            "unit": "ns",
            "range": "± 71599.53311898858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3859235.185185185,
            "unit": "ns",
            "range": "± 105985.48414289029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6253538.461538462,
            "unit": "ns",
            "range": "± 68046.20413686495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249504.08163265305,
            "unit": "ns",
            "range": "± 8719.565145494964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238929.54545454544,
            "unit": "ns",
            "range": "± 8614.06582405438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205265.5172413793,
            "unit": "ns",
            "range": "± 5847.849168837876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3764086.6666666665,
            "unit": "ns",
            "range": "± 31047.38007503708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3480340,
            "unit": "ns",
            "range": "± 60489.50085994853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16696.938775510203,
            "unit": "ns",
            "range": "± 1993.3111902980822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79586.90476190476,
            "unit": "ns",
            "range": "± 4262.749261677123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66172.72727272728,
            "unit": "ns",
            "range": "± 1592.5965077079745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86023.23232323233,
            "unit": "ns",
            "range": "± 14062.860540741074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4432.631578947368,
            "unit": "ns",
            "range": "± 718.9593699145355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16598.96907216495,
            "unit": "ns",
            "range": "± 2245.9451817553722"
          }
        ]
      }
    ]
  }
}