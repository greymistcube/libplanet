window.BENCHMARK_DATA = {
  "lastUpdate": 1681801775920,
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
          "id": "d2ed2693ec59760d48ad3470a61629982a10c806",
          "message": "Prepare 1.1.0",
          "timestamp": "2023-04-18T15:44:40+09:00",
          "tree_id": "12f24b946ecaf7de0e7fbca77aff22ba4d17a8ae",
          "url": "https://github.com/greymistcube/libplanet/commit/d2ed2693ec59760d48ad3470a61629982a10c806"
        },
        "date": 1681801758194,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8112260.14893617,
            "unit": "ns",
            "range": "± 537626.5813706125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21284073.397260275,
            "unit": "ns",
            "range": "± 1055821.6624457273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58001283.152173914,
            "unit": "ns",
            "range": "± 1398348.9102535634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109726396.56818181,
            "unit": "ns",
            "range": "± 7683095.559604981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228999784.38235295,
            "unit": "ns",
            "range": "± 6738135.137305102"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76495.61224489796,
            "unit": "ns",
            "range": "± 15427.617018140072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 414447.05056179775,
            "unit": "ns",
            "range": "± 41179.83047147409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 356374.6935483871,
            "unit": "ns",
            "range": "± 26466.437723397525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 339597.08247422683,
            "unit": "ns",
            "range": "± 57164.69452265206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5874443.281609195,
            "unit": "ns",
            "range": "± 319859.9000774319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4343574.282608695,
            "unit": "ns",
            "range": "± 276340.85666732944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23710.77894736842,
            "unit": "ns",
            "range": "± 5514.862298736039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121655.20652173914,
            "unit": "ns",
            "range": "± 16784.666551427057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120811.55913978495,
            "unit": "ns",
            "range": "± 16784.590997246076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 264143.72631578945,
            "unit": "ns",
            "range": "± 23126.489866873395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9173.885416666666,
            "unit": "ns",
            "range": "± 1697.6638057220785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23178.01020408163,
            "unit": "ns",
            "range": "± 4979.688725615137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2128767.1170212766,
            "unit": "ns",
            "range": "± 601740.4138862512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3845447.847826087,
            "unit": "ns",
            "range": "± 731879.0476160547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2906475.023809524,
            "unit": "ns",
            "range": "± 428380.00891882036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9724811.302197803,
            "unit": "ns",
            "range": "± 2442896.228864784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3463788.38372093,
            "unit": "ns",
            "range": "± 225261.95195019033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3793232.6304347827,
            "unit": "ns",
            "range": "± 291687.4512803428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4802758.795454546,
            "unit": "ns",
            "range": "± 285278.78689169034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4732785.230769231,
            "unit": "ns",
            "range": "± 361206.58579479833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9047939.355555555,
            "unit": "ns",
            "range": "± 582962.2329071364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6991356.233258928,
            "unit": "ns",
            "range": "± 164105.02920640944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2264832.501953125,
            "unit": "ns",
            "range": "± 116677.94922696796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387122.9815848214,
            "unit": "ns",
            "range": "± 22867.57680454626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2834091.44604846,
            "unit": "ns",
            "range": "± 135859.0523019525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952995.8095904478,
            "unit": "ns",
            "range": "± 57311.64240899069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 871989.680422547,
            "unit": "ns",
            "range": "± 51545.84315088079"
          }
        ]
      }
    ]
  }
}