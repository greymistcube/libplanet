window.BENCHMARK_DATA = {
  "lastUpdate": 1695014400028,
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
          "id": "7ced969e48fee56a6402ce06c54b0eb58149b5ac",
          "message": "Added new GetAccountState() interface method",
          "timestamp": "2023-09-18T14:00:07+09:00",
          "tree_id": "2e86c9bae5ec44070e4137b9708d6343b89d33a3",
          "url": "https://github.com/greymistcube/libplanet/commit/7ced969e48fee56a6402ce06c54b0eb58149b5ac"
        },
        "date": 1695014376364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1796692.7083333333,
            "unit": "ns",
            "range": "± 184675.96500772669"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3359412.2448979593,
            "unit": "ns",
            "range": "± 374251.7583277376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2247810.2040816327,
            "unit": "ns",
            "range": "± 217576.00152864985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5964005.434782608,
            "unit": "ns",
            "range": "± 430583.236037995"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60757.142857142855,
            "unit": "ns",
            "range": "± 6413.02741573125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8954965.88235294,
            "unit": "ns",
            "range": "± 484012.3944578233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27457700,
            "unit": "ns",
            "range": "± 323369.9687148865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68775960.71428572,
            "unit": "ns",
            "range": "± 1932199.8714455722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134594289.13043478,
            "unit": "ns",
            "range": "± 5118932.49380195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290583742.85714287,
            "unit": "ns",
            "range": "± 8287710.482123675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5683302.3828125,
            "unit": "ns",
            "range": "± 123596.0908948905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1773027.1573153408,
            "unit": "ns",
            "range": "± 41775.392227035096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339227.509014423,
            "unit": "ns",
            "range": "± 13010.555932651943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3227423.1026785714,
            "unit": "ns",
            "range": "± 33354.51582794512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1046157.0033482143,
            "unit": "ns",
            "range": "± 13392.421031588148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 944438.2533482143,
            "unit": "ns",
            "range": "± 9438.372016176141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4538741.071428572,
            "unit": "ns",
            "range": "± 192511.69388498855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4700477.777777778,
            "unit": "ns",
            "range": "± 128166.93841456971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5671185.106382979,
            "unit": "ns",
            "range": "± 207720.0697622973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5171718.75,
            "unit": "ns",
            "range": "± 92530.93334123459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7991037.5,
            "unit": "ns",
            "range": "± 205574.9494392654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342235.35353535356,
            "unit": "ns",
            "range": "± 28046.216642998075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324718.9655172414,
            "unit": "ns",
            "range": "± 14260.268161359301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308380.30303030304,
            "unit": "ns",
            "range": "± 33311.744740591676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5325092.857142857,
            "unit": "ns",
            "range": "± 89553.15966839701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5089017.543859649,
            "unit": "ns",
            "range": "± 216883.00756959055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27518.478260869564,
            "unit": "ns",
            "range": "± 4026.3671993123085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 133741,
            "unit": "ns",
            "range": "± 23781.23398604433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81080,
            "unit": "ns",
            "range": "± 4728.4508235796675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111956.12244897959,
            "unit": "ns",
            "range": "± 23917.401103197717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6721.0526315789475,
            "unit": "ns",
            "range": "± 1160.144409283576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24434.83146067416,
            "unit": "ns",
            "range": "± 2924.469692548607"
          }
        ]
      }
    ]
  }
}