window.BENCHMARK_DATA = {
  "lastUpdate": 1707183475731,
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
          "id": "9f60eeef9e4d848990aa140c25ac59840172a624",
          "message": "Updated graphql schema",
          "timestamp": "2024-02-06T01:36:10+09:00",
          "tree_id": "04e35806d84d3c33f6d6c16daeafa124a4123e97",
          "url": "https://github.com/greymistcube/libplanet/commit/9f60eeef9e4d848990aa140c25ac59840172a624"
        },
        "date": 1707151712218,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971123.2323232323,
            "unit": "ns",
            "range": "± 120613.65275233895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1728204.1666666667,
            "unit": "ns",
            "range": "± 84265.5116952814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1554471.7171717172,
            "unit": "ns",
            "range": "± 175383.5610244971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10920391.304347826,
            "unit": "ns",
            "range": "± 929025.2641677817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34827.58620689655,
            "unit": "ns",
            "range": "± 1919.343980415281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5195926.666666667,
            "unit": "ns",
            "range": "± 58816.48780822634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13223978.57142857,
            "unit": "ns",
            "range": "± 98068.12528952616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32736453.333333332,
            "unit": "ns",
            "range": "± 339925.0124589806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66238111.76470588,
            "unit": "ns",
            "range": "± 1282845.7525567682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134739393.33333334,
            "unit": "ns",
            "range": "± 1778471.7265380516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3325217.265625,
            "unit": "ns",
            "range": "± 18150.00140950131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1053191.4513221155,
            "unit": "ns",
            "range": "± 2250.6513615666818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746739.6549479166,
            "unit": "ns",
            "range": "± 2440.561423433356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945363.8541666667,
            "unit": "ns",
            "range": "± 6492.244184474223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 637781.2044270834,
            "unit": "ns",
            "range": "± 1794.905394527647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576768.3463541666,
            "unit": "ns",
            "range": "± 1213.9901415394004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2230577.5,
            "unit": "ns",
            "range": "± 79274.11220180655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2397344.4444444445,
            "unit": "ns",
            "range": "± 49398.323646506135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2833861.290322581,
            "unit": "ns",
            "range": "± 84952.15782003169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2842527.777777778,
            "unit": "ns",
            "range": "± 140452.1012254859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12459209.89010989,
            "unit": "ns",
            "range": "± 1530837.7800011588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171329.41176470587,
            "unit": "ns",
            "range": "± 8133.862492801303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164543.661971831,
            "unit": "ns",
            "range": "± 7972.662799383657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143013.33333333334,
            "unit": "ns",
            "range": "± 5322.533573061201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2761536.6666666665,
            "unit": "ns",
            "range": "± 26584.390335755485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2317915.3846153845,
            "unit": "ns",
            "range": "± 21802.784461082265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9469.87951807229,
            "unit": "ns",
            "range": "± 589.0742923370939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49708.0459770115,
            "unit": "ns",
            "range": "± 3203.349206283389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46284.04255319149,
            "unit": "ns",
            "range": "± 2780.7442026821523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54323.4693877551,
            "unit": "ns",
            "range": "± 10393.550250435681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2514.7368421052633,
            "unit": "ns",
            "range": "± 329.72213351600635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10285.869565217392,
            "unit": "ns",
            "range": "± 1453.1951550373353"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "09bea08b8ced82d4bdf0d79ba8057ed59b2f4b3e",
          "message": "Changelog",
          "timestamp": "2024-02-06T01:41:57+09:00",
          "tree_id": "93d7af9b7f4b535356bfb463ce92adf87db6d382",
          "url": "https://github.com/greymistcube/libplanet/commit/09bea08b8ced82d4bdf0d79ba8057ed59b2f4b3e"
        },
        "date": 1707152079610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972460.6382978724,
            "unit": "ns",
            "range": "± 94282.18707469718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1741044.642857143,
            "unit": "ns",
            "range": "± 69296.66899942294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1575322.2222222222,
            "unit": "ns",
            "range": "± 150335.85703117217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10905891.011235954,
            "unit": "ns",
            "range": "± 910890.1989063987"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34638.09523809524,
            "unit": "ns",
            "range": "± 1591.0463762658121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5059553.333333333,
            "unit": "ns",
            "range": "± 47460.49284354705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13488376.923076924,
            "unit": "ns",
            "range": "± 98772.90581468647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33496628.57142857,
            "unit": "ns",
            "range": "± 286989.69005489064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65539840,
            "unit": "ns",
            "range": "± 311417.59010783484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134591638.46153846,
            "unit": "ns",
            "range": "± 666339.3298943884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3359609.8567708335,
            "unit": "ns",
            "range": "± 9548.015465853103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056476.576450893,
            "unit": "ns",
            "range": "± 1344.8171705783377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746712.0686848959,
            "unit": "ns",
            "range": "± 817.7525301594702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968586.7447916667,
            "unit": "ns",
            "range": "± 2387.19529993468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610637.05078125,
            "unit": "ns",
            "range": "± 619.3011657602501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563303.5016741072,
            "unit": "ns",
            "range": "± 2189.3310576029735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2221176.7441860465,
            "unit": "ns",
            "range": "± 81197.06726233668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2319890,
            "unit": "ns",
            "range": "± 93719.03352520212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2853594.871794872,
            "unit": "ns",
            "range": "± 99735.45256991235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2884261.290322581,
            "unit": "ns",
            "range": "± 200646.3512448761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12468189.361702127,
            "unit": "ns",
            "range": "± 1597470.9032615684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180895.94594594595,
            "unit": "ns",
            "range": "± 9000.387193941922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171759.15492957746,
            "unit": "ns",
            "range": "± 8400.332943483147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144994.87179487178,
            "unit": "ns",
            "range": "± 4624.019026433079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2863415.3846153845,
            "unit": "ns",
            "range": "± 13834.067017923913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2503457.1428571427,
            "unit": "ns",
            "range": "± 40077.08849178071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11664.772727272728,
            "unit": "ns",
            "range": "± 1210.1144405582675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59665.9793814433,
            "unit": "ns",
            "range": "± 6881.131910853799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46796.05263157895,
            "unit": "ns",
            "range": "± 2223.5371694351434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60439.77272727273,
            "unit": "ns",
            "range": "± 10001.17854862848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2983.3333333333335,
            "unit": "ns",
            "range": "± 545.5401315097904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11665.625,
            "unit": "ns",
            "range": "± 1670.5390321374525"
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "760f5dd2116e520dc240acf0d5e8874848263403",
          "message": "Changelog",
          "timestamp": "2024-02-06T10:24:44+09:00",
          "tree_id": "f0e5de52ed83706efda65e4dad0641b337fb76e0",
          "url": "https://github.com/greymistcube/libplanet/commit/760f5dd2116e520dc240acf0d5e8874848263403"
        },
        "date": 1707183455226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986805.2083333334,
            "unit": "ns",
            "range": "± 99472.65095681924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1743862.5,
            "unit": "ns",
            "range": "± 60995.06364011385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1603581,
            "unit": "ns",
            "range": "± 177123.2753927574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10981941.573033707,
            "unit": "ns",
            "range": "± 878314.0409341312"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34736.11111111111,
            "unit": "ns",
            "range": "± 1721.7175796570577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5076930.769230769,
            "unit": "ns",
            "range": "± 30822.26967133192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13692968.75,
            "unit": "ns",
            "range": "± 259811.8799407243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33249784.615384616,
            "unit": "ns",
            "range": "± 373821.3406743785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66911660,
            "unit": "ns",
            "range": "± 1027606.107694689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131636542.85714285,
            "unit": "ns",
            "range": "± 978980.658027118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3376588.8671875,
            "unit": "ns",
            "range": "± 12955.915495892865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1092088.0989583333,
            "unit": "ns",
            "range": "± 5244.07916925089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763053.9518229166,
            "unit": "ns",
            "range": "± 1759.3779645880468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970713.755580357,
            "unit": "ns",
            "range": "± 5014.500325043718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625917.5013950893,
            "unit": "ns",
            "range": "± 1589.9755233420624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578559.9400111607,
            "unit": "ns",
            "range": "± 989.9122971577302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2185512.5,
            "unit": "ns",
            "range": "± 76620.82527214527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301550,
            "unit": "ns",
            "range": "± 31564.73202313474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2790453.06122449,
            "unit": "ns",
            "range": "± 110655.11567862709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2796808.4210526315,
            "unit": "ns",
            "range": "± 176614.35850592423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12365636.263736263,
            "unit": "ns",
            "range": "± 1493278.871292334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184129.88505747126,
            "unit": "ns",
            "range": "± 9783.982103447863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167481.81818181818,
            "unit": "ns",
            "range": "± 9932.167008453067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144448.38709677418,
            "unit": "ns",
            "range": "± 6581.31338567664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2924473.3333333335,
            "unit": "ns",
            "range": "± 40120.149313685026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2533986.6666666665,
            "unit": "ns",
            "range": "± 42391.657984403806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10692.307692307691,
            "unit": "ns",
            "range": "± 1501.6458207380897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54359.782608695656,
            "unit": "ns",
            "range": "± 4230.840713030317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44826.31578947369,
            "unit": "ns",
            "range": "± 2262.82233334407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54808.080808080806,
            "unit": "ns",
            "range": "± 12394.630805704943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2467.7083333333335,
            "unit": "ns",
            "range": "± 434.67950484215896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11465.168539325843,
            "unit": "ns",
            "range": "± 1662.9724976949822"
          }
        ]
      }
    ]
  }
}