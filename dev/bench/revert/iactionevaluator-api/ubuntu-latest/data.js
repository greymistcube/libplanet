window.BENCHMARK_DATA = {
  "lastUpdate": 1705468808020,
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
          "id": "a190c93147e682b08d5f6764040a3851eecc7e4b",
          "message": "Fixed tests",
          "timestamp": "2024-01-17T14:07:58+09:00",
          "tree_id": "40cbc79c3543accf5d4b6d0edc973ee3cadad634",
          "url": "https://github.com/greymistcube/libplanet/commit/a190c93147e682b08d5f6764040a3851eecc7e4b"
        },
        "date": 1705468801758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3734525.2796875,
            "unit": "ns",
            "range": "± 60402.749671974896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202694.9379185268,
            "unit": "ns",
            "range": "± 3092.2614871277306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773345.6316266741,
            "unit": "ns",
            "range": "± 3041.8988831971783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934044.4737723214,
            "unit": "ns",
            "range": "± 2799.151716093433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628872.7530110677,
            "unit": "ns",
            "range": "± 1075.6743310712222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581936.7254231771,
            "unit": "ns",
            "range": "± 506.91299306877085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2470347.36,
            "unit": "ns",
            "range": "± 64399.01384524455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2629196.197674419,
            "unit": "ns",
            "range": "± 96890.80744925357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3270789.2666666666,
            "unit": "ns",
            "range": "± 55150.32271303931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3221762.805970149,
            "unit": "ns",
            "range": "± 141656.23118569303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14051684.897727273,
            "unit": "ns",
            "range": "± 809302.0136988492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40174.95161290323,
            "unit": "ns",
            "range": "± 5257.3422003156875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206896.6222222222,
            "unit": "ns",
            "range": "± 11325.404862498322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194234.0641025641,
            "unit": "ns",
            "range": "± 9591.979366359617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164847.85,
            "unit": "ns",
            "range": "± 3428.1961080520405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3227801.9285714286,
            "unit": "ns",
            "range": "± 42241.67960942456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2812347.6470588236,
            "unit": "ns",
            "range": "± 41632.14701546927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16536.694736842106,
            "unit": "ns",
            "range": "± 3676.7949881039694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75328.9191919192,
            "unit": "ns",
            "range": "± 10106.237379608461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88835.51020408163,
            "unit": "ns",
            "range": "± 15777.01465985294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79884.24489795919,
            "unit": "ns",
            "range": "± 20256.241698770144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4145,
            "unit": "ns",
            "range": "± 774.0147904486925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16490.141414141413,
            "unit": "ns",
            "range": "± 3045.8224753301943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5604361.416666667,
            "unit": "ns",
            "range": "± 37234.913941959785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14503747.785714285,
            "unit": "ns",
            "range": "± 102513.21681480773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36435387,
            "unit": "ns",
            "range": "± 147507.725846253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74702592.66666667,
            "unit": "ns",
            "range": "± 252794.82178684443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 157272474.42857143,
            "unit": "ns",
            "range": "± 684202.1643137708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 976875.2826086957,
            "unit": "ns",
            "range": "± 75745.94306349744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1940584.0533333332,
            "unit": "ns",
            "range": "± 97080.34902649056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1660478.9677419355,
            "unit": "ns",
            "range": "± 204316.61156675074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12867078.489361702,
            "unit": "ns",
            "range": "± 927216.4558113322"
          }
        ]
      }
    ]
  }
}