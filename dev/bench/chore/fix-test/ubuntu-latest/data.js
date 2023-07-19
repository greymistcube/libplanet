window.BENCHMARK_DATA = {
  "lastUpdate": 1689785768437,
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
      }
    ]
  }
}