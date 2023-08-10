window.BENCHMARK_DATA = {
  "lastUpdate": 1689822399491,
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
          "id": "af6f83ceeb3a583a1157b9496332826fd8e37e90",
          "message": "Simple test fix",
          "timestamp": "2023-07-20T01:40:51+09:00",
          "tree_id": "957d5b3c5e1ff5e5c90d3fff0e604c1225fe9000",
          "url": "https://github.com/greymistcube/libplanet/commit/af6f83ceeb3a583a1157b9496332826fd8e37e90"
        },
        "date": 1689785760765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307587.46153846156,
            "unit": "ns",
            "range": "± 9398.884583446881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287903.829787234,
            "unit": "ns",
            "range": "± 10535.319079213146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278126.16,
            "unit": "ns",
            "range": "± 18423.098200011656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4584547.4,
            "unit": "ns",
            "range": "± 29000.806825722233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4194904.142857143,
            "unit": "ns",
            "range": "± 49854.76498769222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24451.35106382979,
            "unit": "ns",
            "range": "± 2228.348526375274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97760.64935064936,
            "unit": "ns",
            "range": "± 4965.33541763673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86412.20408163265,
            "unit": "ns",
            "range": "± 6917.896486141785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113804.21428571429,
            "unit": "ns",
            "range": "± 17548.845177883344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6432.34375,
            "unit": "ns",
            "range": "± 995.7212548872353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23644.2688172043,
            "unit": "ns",
            "range": "± 2811.5935491545533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1537214.8,
            "unit": "ns",
            "range": "± 102565.8062626655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2828202.5217391304,
            "unit": "ns",
            "range": "± 107795.45216313661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1965908.375,
            "unit": "ns",
            "range": "± 118770.1303498086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5431378.96969697,
            "unit": "ns",
            "range": "± 254154.07962584545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6141922.057291667,
            "unit": "ns",
            "range": "± 22879.238144026065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1906608.6036458334,
            "unit": "ns",
            "range": "± 2958.247942289974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397909.4111979166,
            "unit": "ns",
            "range": "± 3477.4519375411955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2681031.80625,
            "unit": "ns",
            "range": "± 2465.56588429238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837235.1331612723,
            "unit": "ns",
            "range": "± 566.1142167083483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774865.7132161459,
            "unit": "ns",
            "range": "± 969.9359420917849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3739265.476190476,
            "unit": "ns",
            "range": "± 87577.24357995007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3842343.56,
            "unit": "ns",
            "range": "± 98669.60063560611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4621120.560975609,
            "unit": "ns",
            "range": "± 161090.66026605153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4419609.153846154,
            "unit": "ns",
            "range": "± 51559.498473197855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6809606.266666667,
            "unit": "ns",
            "range": "± 107910.62195133438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8968457.466666667,
            "unit": "ns",
            "range": "± 110071.30213565247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23313515.866666667,
            "unit": "ns",
            "range": "± 303224.4767803141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58204228.666666664,
            "unit": "ns",
            "range": "± 394498.3388546715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115264911,
            "unit": "ns",
            "range": "± 1057588.100345388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227307936.6,
            "unit": "ns",
            "range": "± 1957802.1478334467"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51764.75,
            "unit": "ns",
            "range": "± 4272.551214657132"
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
          "id": "ba662cd6cf763d049714afff7b78975135e5512e",
          "message": "Simple test fix",
          "timestamp": "2023-07-20T11:52:06+09:00",
          "tree_id": "957d5b3c5e1ff5e5c90d3fff0e604c1225fe9000",
          "url": "https://github.com/greymistcube/libplanet/commit/ba662cd6cf763d049714afff7b78975135e5512e"
        },
        "date": 1689822392458,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293417.85714285716,
            "unit": "ns",
            "range": "± 8221.420746437145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276890.69696969696,
            "unit": "ns",
            "range": "± 8621.435152734319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267041.2033898305,
            "unit": "ns",
            "range": "± 11798.169901594267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4576984,
            "unit": "ns",
            "range": "± 54450.775090902054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4133814.1333333333,
            "unit": "ns",
            "range": "± 39931.76406225762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21104.44680851064,
            "unit": "ns",
            "range": "± 1377.1911543554388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91937.6301369863,
            "unit": "ns",
            "range": "± 4556.37263897393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76067.35294117648,
            "unit": "ns",
            "range": "± 3079.8827174003195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98681.15463917526,
            "unit": "ns",
            "range": "± 13603.838008796918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5532.7040816326535,
            "unit": "ns",
            "range": "± 814.0175814254669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19621.80412371134,
            "unit": "ns",
            "range": "± 1576.469880508183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1473948.4845360825,
            "unit": "ns",
            "range": "± 98867.59621312078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2731319.5,
            "unit": "ns",
            "range": "± 65636.6056526024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1897250.7674418604,
            "unit": "ns",
            "range": "± 102187.41443096825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5035255.214285715,
            "unit": "ns",
            "range": "± 143758.0533044264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6282284.611458333,
            "unit": "ns",
            "range": "± 20317.629463268026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883584.31328125,
            "unit": "ns",
            "range": "± 5565.3290556075435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392281.2658854167,
            "unit": "ns",
            "range": "± 3948.2055187193528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637354.934795673,
            "unit": "ns",
            "range": "± 5372.299994101643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829052.544140625,
            "unit": "ns",
            "range": "± 1455.4378857147171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770075.5232282366,
            "unit": "ns",
            "range": "± 292.9527039596585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3609816.272727273,
            "unit": "ns",
            "range": "± 87451.04282597578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3852900.714285714,
            "unit": "ns",
            "range": "± 65808.04677174432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4601207.931034483,
            "unit": "ns",
            "range": "± 134072.42956352548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4221169.0869565215,
            "unit": "ns",
            "range": "± 98511.07488589246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6721741.6,
            "unit": "ns",
            "range": "± 176602.87238368086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8253084.578947368,
            "unit": "ns",
            "range": "± 181561.18556451058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22744133.066666666,
            "unit": "ns",
            "range": "± 223113.70252422118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55895396,
            "unit": "ns",
            "range": "± 632093.048549703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113088717.78571428,
            "unit": "ns",
            "range": "± 575200.4526512313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224528050.64285713,
            "unit": "ns",
            "range": "± 1486341.1695903887"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47245.275862068964,
            "unit": "ns",
            "range": "± 2596.7289516999326"
          }
        ]
      }
    ]
  }
}