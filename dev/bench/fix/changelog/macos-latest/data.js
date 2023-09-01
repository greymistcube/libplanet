window.BENCHMARK_DATA = {
  "lastUpdate": 1693547382550,
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
          "id": "8608f30b1034b8076cbb7f6bd9998add244b3e4b",
          "message": "Changelog",
          "timestamp": "2023-09-01T14:31:05+09:00",
          "tree_id": "a8e737ad5d8cf8d75c730c81eca9b1bb6ee3c066",
          "url": "https://github.com/greymistcube/libplanet/commit/8608f30b1034b8076cbb7f6bd9998add244b3e4b"
        },
        "date": 1693547368171,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8378722.796610169,
            "unit": "ns",
            "range": "± 346085.5269748724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21033511.533333335,
            "unit": "ns",
            "range": "± 797820.0875742487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49607600.717391305,
            "unit": "ns",
            "range": "± 1213787.2122004204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101416859.76470588,
            "unit": "ns",
            "range": "± 2045733.2787463255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227727595.39130434,
            "unit": "ns",
            "range": "± 4840452.910073778"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72340.10638297872,
            "unit": "ns",
            "range": "± 12053.674371499854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332493.6,
            "unit": "ns",
            "range": "± 35677.04211175332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322195.90425531915,
            "unit": "ns",
            "range": "± 43939.17885207956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305338.9666666667,
            "unit": "ns",
            "range": "± 19978.64380186498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4029654.217391304,
            "unit": "ns",
            "range": "± 97404.89017402683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4009878,
            "unit": "ns",
            "range": "± 76554.29792680922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18213.24193548387,
            "unit": "ns",
            "range": "± 2101.7240485270854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103376.17708333333,
            "unit": "ns",
            "range": "± 18726.37682830504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112984.14285714286,
            "unit": "ns",
            "range": "± 19415.036137873158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113011.57608695653,
            "unit": "ns",
            "range": "± 23138.616834075176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7265.108695652174,
            "unit": "ns",
            "range": "± 1700.1374602248545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22031.79411764706,
            "unit": "ns",
            "range": "± 3528.9504268048227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1527699.163265306,
            "unit": "ns",
            "range": "± 186390.32200162642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2786575.243243243,
            "unit": "ns",
            "range": "± 139161.18808991808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2033438.38,
            "unit": "ns",
            "range": "± 217279.74638429563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5414405.329787234,
            "unit": "ns",
            "range": "± 209209.3573240139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3479266.932989691,
            "unit": "ns",
            "range": "± 326095.51783986244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3512695.0833333335,
            "unit": "ns",
            "range": "± 136203.65542284868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4620547.239583333,
            "unit": "ns",
            "range": "± 319533.84102461196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4285439.65,
            "unit": "ns",
            "range": "± 512850.7986938469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7977326.65625,
            "unit": "ns",
            "range": "± 883742.2846843124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5563295.860677083,
            "unit": "ns",
            "range": "± 108150.33389232594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1772980.9601384944,
            "unit": "ns",
            "range": "± 42076.82238306416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073503.6215183423,
            "unit": "ns",
            "range": "± 27020.994772270402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656986.7706705728,
            "unit": "ns",
            "range": "± 173914.83522346293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854755.5990513393,
            "unit": "ns",
            "range": "± 14974.520467442973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 820768.8859675481,
            "unit": "ns",
            "range": "± 11752.303278694448"
          }
        ]
      }
    ]
  }
}