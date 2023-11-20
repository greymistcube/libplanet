window.BENCHMARK_DATA = {
  "lastUpdate": 1700469305003,
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
          "id": "8eaba8bfb494d0eb4664076dcfebda984d623a5f",
          "message": "Release 3.6.1",
          "timestamp": "2023-11-20T17:13:46+09:00",
          "tree_id": "bbdc6bb77b5e1b1e069c9c19d459370c81ca5a0f",
          "url": "https://github.com/greymistcube/libplanet/commit/8eaba8bfb494d0eb4664076dcfebda984d623a5f"
        },
        "date": 1700469288076,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8236021.133333334,
            "unit": "ns",
            "range": "± 124845.1472149551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22178756.844444446,
            "unit": "ns",
            "range": "± 2071056.7359363122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71377243.14,
            "unit": "ns",
            "range": "± 9262736.096230606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142844564.3041237,
            "unit": "ns",
            "range": "± 12027360.198906569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222012681.65934065,
            "unit": "ns",
            "range": "± 19530102.402454913"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49624.239130434784,
            "unit": "ns",
            "range": "± 9842.858217927973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247408.48235294118,
            "unit": "ns",
            "range": "± 15442.248283918532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233756.93827160494,
            "unit": "ns",
            "range": "± 18114.750156533817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228573.27011494254,
            "unit": "ns",
            "range": "± 14443.35122944935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4043863.9529411765,
            "unit": "ns",
            "range": "± 357466.25190538407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3623141.6363636362,
            "unit": "ns",
            "range": "± 123797.6522497059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19480.619565217392,
            "unit": "ns",
            "range": "± 4788.4487654096965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78460.47826086957,
            "unit": "ns",
            "range": "± 16195.705822113627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76760.97916666667,
            "unit": "ns",
            "range": "± 16929.59772642306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78821.22826086957,
            "unit": "ns",
            "range": "± 13260.892562822046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5392.031578947369,
            "unit": "ns",
            "range": "± 1854.4121018999556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20312.268041237112,
            "unit": "ns",
            "range": "± 4486.436711345152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1055649.0729166667,
            "unit": "ns",
            "range": "± 84852.70068570465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2312910.9204545454,
            "unit": "ns",
            "range": "± 153389.02985705287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1708156.7142857143,
            "unit": "ns",
            "range": "± 207986.9204426243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7779459.904255319,
            "unit": "ns",
            "range": "± 1108604.9859049227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4426700.927083333,
            "unit": "ns",
            "range": "± 1249919.770327783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3736799.836956522,
            "unit": "ns",
            "range": "± 452286.4867452461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4211438.840909091,
            "unit": "ns",
            "range": "± 512832.8567919567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4407287.597826087,
            "unit": "ns",
            "range": "± 658370.313657616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16516238.880434783,
            "unit": "ns",
            "range": "± 3159656.7590083275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6149933.270408163,
            "unit": "ns",
            "range": "± 910350.8366565598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924196.8724888393,
            "unit": "ns",
            "range": "± 245319.62992154772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1121672.8980601917,
            "unit": "ns",
            "range": "± 127038.56565437601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2506993.3681739266,
            "unit": "ns",
            "range": "± 416874.80382714374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 663128.1919601213,
            "unit": "ns",
            "range": "± 31247.465226980803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578079.3511439732,
            "unit": "ns",
            "range": "± 13515.526137247703"
          }
        ]
      }
    ]
  }
}