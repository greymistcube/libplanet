window.BENCHMARK_DATA = {
  "lastUpdate": 1702005281230,
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
          "id": "88249371b08e6728369e085f41db075312dab916",
          "message": "Release 3.9.1",
          "timestamp": "2023-12-08T12:02:54+09:00",
          "tree_id": "9bee94af45c895ba31e0991f1abcb83f913c2b87",
          "url": "https://github.com/greymistcube/libplanet/commit/88249371b08e6728369e085f41db075312dab916"
        },
        "date": 1702005262026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928945.8333333334,
            "unit": "ns",
            "range": "± 114144.57307031074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1619694.4444444445,
            "unit": "ns",
            "range": "± 66199.92209613687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1294742.857142857,
            "unit": "ns",
            "range": "± 121420.50833924567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5053100,
            "unit": "ns",
            "range": "± 150071.06538792435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33174.64788732395,
            "unit": "ns",
            "range": "± 1596.0413805823416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4963480,
            "unit": "ns",
            "range": "± 36659.84958273249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12858530.76923077,
            "unit": "ns",
            "range": "± 55384.179218368015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32361235.714285713,
            "unit": "ns",
            "range": "± 207230.03052031467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63270860,
            "unit": "ns",
            "range": "± 473633.67218618596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128025742.85714285,
            "unit": "ns",
            "range": "± 884747.7465046492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3239562.9743303573,
            "unit": "ns",
            "range": "± 10725.630209887393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051502.3716517857,
            "unit": "ns",
            "range": "± 2851.7949945735786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728220.8286830357,
            "unit": "ns",
            "range": "± 1254.7187354317764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1907977.748325893,
            "unit": "ns",
            "range": "± 3022.1681336559286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604679.2067307692,
            "unit": "ns",
            "range": "± 1107.4350030148773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 546147.1540178572,
            "unit": "ns",
            "range": "± 541.855728849363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2075856.6666666667,
            "unit": "ns",
            "range": "± 61573.85631588454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2160928,
            "unit": "ns",
            "range": "± 53108.76041985289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2731965.8536585364,
            "unit": "ns",
            "range": "± 92979.99411098093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2617984,
            "unit": "ns",
            "range": "± 64941.14437960986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6352726.76056338,
            "unit": "ns",
            "range": "± 309460.4050175755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163306.3492063492,
            "unit": "ns",
            "range": "± 6370.11351030361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 155415.38461538462,
            "unit": "ns",
            "range": "± 6064.017454815552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140076,
            "unit": "ns",
            "range": "± 3656.191096391617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2688926.6666666665,
            "unit": "ns",
            "range": "± 32111.846204581052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2419880,
            "unit": "ns",
            "range": "± 38632.465991332065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9348.863636363636,
            "unit": "ns",
            "range": "± 745.7148569378843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48978.48101265823,
            "unit": "ns",
            "range": "± 2360.6100301359493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42998.48484848485,
            "unit": "ns",
            "range": "± 1259.9903799536555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44931.18279569892,
            "unit": "ns",
            "range": "± 6424.5787967945835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2169.5652173913045,
            "unit": "ns",
            "range": "± 183.8173546642874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8780,
            "unit": "ns",
            "range": "± 439.0438402607262"
          }
        ]
      }
    ]
  }
}