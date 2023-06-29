window.BENCHMARK_DATA = {
  "lastUpdate": 1688029306356,
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
      },
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
          "id": "dc1329ba84fdfe79a5770d28695f5f0f33b54344",
          "message": "Prepare 2.3.1",
          "timestamp": "2023-06-29T17:42:26+09:00",
          "tree_id": "bfca3d30a84afe1d5b5d13b8aebd4c855e88bec2",
          "url": "https://github.com/greymistcube/libplanet/commit/dc1329ba84fdfe79a5770d28695f5f0f33b54344"
        },
        "date": 1688029281553,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428863.9175257732,
            "unit": "ns",
            "range": "± 208588.29175034363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2638188.775510204,
            "unit": "ns",
            "range": "± 256786.81313199314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2341794.845360825,
            "unit": "ns",
            "range": "± 325731.49390101386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5952619.587628866,
            "unit": "ns",
            "range": "± 556672.3188284363"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59469.791666666664,
            "unit": "ns",
            "range": "± 11832.374142617242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7350005.102040816,
            "unit": "ns",
            "range": "± 471212.82765091717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19488183.83838384,
            "unit": "ns",
            "range": "± 2195759.1523767677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48451640.81632653,
            "unit": "ns",
            "range": "± 3340068.681182751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103599325.51020408,
            "unit": "ns",
            "range": "± 6760151.061819616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193727329.06976745,
            "unit": "ns",
            "range": "± 10515890.239675844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5004198.330965909,
            "unit": "ns",
            "range": "± 122490.33790848436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1598989.0478515625,
            "unit": "ns",
            "range": "± 56641.332613093546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1242393.45703125,
            "unit": "ns",
            "range": "± 47067.22640268896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2705780.46875,
            "unit": "ns",
            "range": "± 47223.73966259554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 889077.1369485294,
            "unit": "ns",
            "range": "± 17842.415638613784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 845707.9354745371,
            "unit": "ns",
            "range": "± 21250.175396632832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264098.969072165,
            "unit": "ns",
            "range": "± 366453.01554645837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3421644.3298969073,
            "unit": "ns",
            "range": "± 290402.09838008526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4614775.257731959,
            "unit": "ns",
            "range": "± 400828.493828441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4355822.680412371,
            "unit": "ns",
            "range": "± 350272.4985354125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7426010.101010101,
            "unit": "ns",
            "range": "± 731375.8130379542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275582.97872340423,
            "unit": "ns",
            "range": "± 30643.98987995824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299712.3711340206,
            "unit": "ns",
            "range": "± 44640.36210308064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233981.914893617,
            "unit": "ns",
            "range": "± 29725.905442194195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3975082.474226804,
            "unit": "ns",
            "range": "± 289781.50246144837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3581055.102040816,
            "unit": "ns",
            "range": "± 255956.06103369853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28475.757575757576,
            "unit": "ns",
            "range": "± 9582.670273638962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95474.73684210527,
            "unit": "ns",
            "range": "± 13924.018498745809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87489.01098901099,
            "unit": "ns",
            "range": "± 10422.715049879711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109594.84536082474,
            "unit": "ns",
            "range": "± 21087.562344968203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4613.0952380952385,
            "unit": "ns",
            "range": "± 1036.5349786209638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26407,
            "unit": "ns",
            "range": "± 8274.412976218318"
          }
        ]
      }
    ]
  }
}