window.BENCHMARK_DATA = {
  "lastUpdate": 1681802313494,
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
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff0633b44c3f2b3182362f39e957058a5e2888b8",
          "message": "Update CHANGES.md\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong@minhee.org>",
          "timestamp": "2023-04-18T16:00:30+09:00",
          "tree_id": "b2d6a09751ee7609ecd7bdca13376d6dff6b07ff",
          "url": "https://github.com/greymistcube/libplanet/commit/ff0633b44c3f2b3182362f39e957058a5e2888b8"
        },
        "date": 1681802279212,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9054103.4,
            "unit": "ns",
            "range": "± 109298.25117003734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24227123.535714287,
            "unit": "ns",
            "range": "± 672362.5427542231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56657267.026315786,
            "unit": "ns",
            "range": "± 1942836.0984457538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111619759.51428571,
            "unit": "ns",
            "range": "± 3623626.5417547105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223274018.63333333,
            "unit": "ns",
            "range": "± 2858059.2424120572"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66208.8085106383,
            "unit": "ns",
            "range": "± 7365.735530035097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 446617.28571428574,
            "unit": "ns",
            "range": "± 14237.40215391969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368316.68518518517,
            "unit": "ns",
            "range": "± 15035.532806848387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333569.0909090909,
            "unit": "ns",
            "range": "± 10571.19408570892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6596685.230769231,
            "unit": "ns",
            "range": "± 80125.93664887153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4725534.486486486,
            "unit": "ns",
            "range": "± 160442.095057795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19585.652173913044,
            "unit": "ns",
            "range": "± 1420.1855043262901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95592.88888888889,
            "unit": "ns",
            "range": "± 5974.809624994869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86844.85106382979,
            "unit": "ns",
            "range": "± 5305.558146040844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 248455.1443298969,
            "unit": "ns",
            "range": "± 20781.129699396002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5770.68085106383,
            "unit": "ns",
            "range": "± 413.2069169175599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20465.51052631579,
            "unit": "ns",
            "range": "± 1573.3589592911196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1820700.1224489796,
            "unit": "ns",
            "range": "± 179298.72471963638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3573761.2884615385,
            "unit": "ns",
            "range": "± 136338.79266628218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2941498.340425532,
            "unit": "ns",
            "range": "± 330560.9061962014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8133549.351648352,
            "unit": "ns",
            "range": "± 603826.9390167346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3682313.4166666665,
            "unit": "ns",
            "range": "± 125436.70833054182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4030130.6428571427,
            "unit": "ns",
            "range": "± 71567.6284770466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5226306.588235294,
            "unit": "ns",
            "range": "± 165670.1842382095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5057569.895061729,
            "unit": "ns",
            "range": "± 238190.63818933352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10011465,
            "unit": "ns",
            "range": "± 305367.27026394237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7021179.054129465,
            "unit": "ns",
            "range": "± 80270.22742739152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2313160.0619791667,
            "unit": "ns",
            "range": "± 10396.030607464441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1485866.3322916667,
            "unit": "ns",
            "range": "± 17264.148698323464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2909792.6593191964,
            "unit": "ns",
            "range": "± 20442.795809333915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 941229.4383463542,
            "unit": "ns",
            "range": "± 6058.548269670279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 861770.22265625,
            "unit": "ns",
            "range": "± 2528.0368387882054"
          }
        ]
      }
    ]
  }
}