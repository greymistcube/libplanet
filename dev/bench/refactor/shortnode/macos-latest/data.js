window.BENCHMARK_DATA = {
  "lastUpdate": 1703647749137,
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
          "id": "938aabdadb2386ae59955429b57526892249e438",
          "message": "Cleaned up ShortNode internal implementation",
          "timestamp": "2023-12-27T11:18:21+09:00",
          "tree_id": "69943ff6e6d38f5e91e2c20aff61552354c1487d",
          "url": "https://github.com/greymistcube/libplanet/commit/938aabdadb2386ae59955429b57526892249e438"
        },
        "date": 1703647732737,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9363355.035714285,
            "unit": "ns",
            "range": "± 242477.62504465226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23003675.82989691,
            "unit": "ns",
            "range": "± 1456950.4965967138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59535112.12337662,
            "unit": "ns",
            "range": "± 3023066.5089818984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116931892.80232558,
            "unit": "ns",
            "range": "± 6326888.239182403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228249230.4526316,
            "unit": "ns",
            "range": "± 24448087.671863746"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45549.322916666664,
            "unit": "ns",
            "range": "± 9432.164194917852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 265886.1770833333,
            "unit": "ns",
            "range": "± 33199.232621599076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267203.13684210525,
            "unit": "ns",
            "range": "± 37818.81992674134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260182.16666666666,
            "unit": "ns",
            "range": "± 39098.8472148454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4746716.357142857,
            "unit": "ns",
            "range": "± 64596.24983501173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3882975.767676768,
            "unit": "ns",
            "range": "± 336609.32806571724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18820.457894736843,
            "unit": "ns",
            "range": "± 3910.8062588107027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97472.2688172043,
            "unit": "ns",
            "range": "± 9360.349724212261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91842.68478260869,
            "unit": "ns",
            "range": "± 14359.742642807983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90192.0306122449,
            "unit": "ns",
            "range": "± 26413.08297094417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5968.631313131313,
            "unit": "ns",
            "range": "± 2465.9361787530006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19091.666666666668,
            "unit": "ns",
            "range": "± 3958.275905347825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066787.7040816327,
            "unit": "ns",
            "range": "± 98882.38389515001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2299263.97979798,
            "unit": "ns",
            "range": "± 149605.66155273753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519300.6836734693,
            "unit": "ns",
            "range": "± 108395.01950579553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6543521.888888889,
            "unit": "ns",
            "range": "± 183012.7778961251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3048947.21,
            "unit": "ns",
            "range": "± 226585.95387463603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3453158.592783505,
            "unit": "ns",
            "range": "± 310806.52610765083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4109100.052631579,
            "unit": "ns",
            "range": "± 360866.66375120153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4199152.355555556,
            "unit": "ns",
            "range": "± 307524.36311014305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14789164.217391305,
            "unit": "ns",
            "range": "± 1811962.0888554337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5203654.449617347,
            "unit": "ns",
            "range": "± 451250.9031680532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1611798.9654947917,
            "unit": "ns",
            "range": "± 40618.11188144868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1023993.3044704861,
            "unit": "ns",
            "range": "± 21400.27240264607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2398085.819754464,
            "unit": "ns",
            "range": "± 37523.94763178493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 753269.0164930555,
            "unit": "ns",
            "range": "± 20794.605004792094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585260.1310292119,
            "unit": "ns",
            "range": "± 14611.15671005772"
          }
        ]
      }
    ]
  }
}