window.BENCHMARK_DATA = {
  "lastUpdate": 1703662010294,
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
          "id": "d3e0e0ca525f99765ad66eb996b51eb9e722f852",
          "message": "Changed FullNode to no longer inherit BaseNode; removed BaseNode",
          "timestamp": "2023-12-27T16:15:54+09:00",
          "tree_id": "fae6f4b6e37b09d5113d55d10f8cc6582dd51f3d",
          "url": "https://github.com/greymistcube/libplanet/commit/d3e0e0ca525f99765ad66eb996b51eb9e722f852"
        },
        "date": 1703662003895,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3706140.783954327,
            "unit": "ns",
            "range": "± 11719.989829837825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1173122.8419471155,
            "unit": "ns",
            "range": "± 2751.5927529864953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771967.6073404948,
            "unit": "ns",
            "range": "± 3231.071071394224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958619.6669921875,
            "unit": "ns",
            "range": "± 2220.4709567749724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627596.4562800481,
            "unit": "ns",
            "range": "± 2127.341337113229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 599528.2227783203,
            "unit": "ns",
            "range": "± 11567.889354948094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417027.84,
            "unit": "ns",
            "range": "± 63437.36001605573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2548102.577777778,
            "unit": "ns",
            "range": "± 92036.30383576633"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3141783,
            "unit": "ns",
            "range": "± 69452.72217527225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2949452.111111111,
            "unit": "ns",
            "range": "± 133250.99229202775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6790532.95,
            "unit": "ns",
            "range": "± 154456.55035315713"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42223.61855670103,
            "unit": "ns",
            "range": "± 5465.841650353162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193537.95,
            "unit": "ns",
            "range": "± 6283.116615796042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192664.5945945946,
            "unit": "ns",
            "range": "± 6403.311267788892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164864.8,
            "unit": "ns",
            "range": "± 3758.4767995334996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3048307.5714285714,
            "unit": "ns",
            "range": "± 46001.64356505986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2836543,
            "unit": "ns",
            "range": "± 27834.745747596357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13376.831578947369,
            "unit": "ns",
            "range": "± 1907.8195399105496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60409.92134831461,
            "unit": "ns",
            "range": "± 4256.244936520066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58078.9898989899,
            "unit": "ns",
            "range": "± 5980.597863593519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63169.208333333336,
            "unit": "ns",
            "range": "± 11233.786809551626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2792.3617021276596,
            "unit": "ns",
            "range": "± 416.4274285499029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12302.26923076923,
            "unit": "ns",
            "range": "± 958.8626373287037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5526622.230769231,
            "unit": "ns",
            "range": "± 23540.327447998134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14701267.166666666,
            "unit": "ns",
            "range": "± 87497.53468989584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36742193.64285714,
            "unit": "ns",
            "range": "± 184258.72871824182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 78444120.6923077,
            "unit": "ns",
            "range": "± 430903.05543810833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148311859.23076922,
            "unit": "ns",
            "range": "± 1202409.536580691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 936089.9130434783,
            "unit": "ns",
            "range": "± 52540.77230462055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1847524.5,
            "unit": "ns",
            "range": "± 53601.09598426403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1393591.6836734693,
            "unit": "ns",
            "range": "± 119350.78212127794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5914635.455882353,
            "unit": "ns",
            "range": "± 281269.4410740924"
          }
        ]
      }
    ]
  }
}