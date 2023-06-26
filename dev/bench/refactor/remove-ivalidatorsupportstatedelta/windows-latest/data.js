window.BENCHMARK_DATA = {
  "lastUpdate": 1687761441601,
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
          "id": "c341e18640c1f491a1d2a900f7f05d818ccd5940",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T15:14:05+09:00",
          "tree_id": "982f1fe962e5e5d45c8dd58eddd405b285026528",
          "url": "https://github.com/greymistcube/libplanet/commit/c341e18640c1f491a1d2a900f7f05d818ccd5940"
        },
        "date": 1687761034925,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1452597,
            "unit": "ns",
            "range": "± 181589.63640999768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2747511.290322581,
            "unit": "ns",
            "range": "± 124112.9748502413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2256997.0149253733,
            "unit": "ns",
            "range": "± 102396.251958735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5544256.470588235,
            "unit": "ns",
            "range": "± 299120.0835653749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49639.784946236556,
            "unit": "ns",
            "range": "± 2922.6677727328024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6897428.571428572,
            "unit": "ns",
            "range": "± 100219.83089935097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19854400,
            "unit": "ns",
            "range": "± 436132.23568087694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49814633.333333336,
            "unit": "ns",
            "range": "± 807014.2153701654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100589583.33333333,
            "unit": "ns",
            "range": "± 2141476.9192284644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200361010,
            "unit": "ns",
            "range": "± 2861600.527876464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4804190.572916667,
            "unit": "ns",
            "range": "± 21182.90439533456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526058.0729166667,
            "unit": "ns",
            "range": "± 8109.8423144535445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170093.2942708333,
            "unit": "ns",
            "range": "± 4834.00485637045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617666.5885416665,
            "unit": "ns",
            "range": "± 9086.189829961977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833497.4479166666,
            "unit": "ns",
            "range": "± 3421.2962312433774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752992.8292410715,
            "unit": "ns",
            "range": "± 2095.9601150635726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3231245.4545454546,
            "unit": "ns",
            "range": "± 121030.91754636154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3354621.875,
            "unit": "ns",
            "range": "± 153936.59122204667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4236445.454545454,
            "unit": "ns",
            "range": "± 102796.45851446869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4215445,
            "unit": "ns",
            "range": "± 187250.3105154584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6804089.743589744,
            "unit": "ns",
            "range": "± 233207.14396711977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272102.12765957444,
            "unit": "ns",
            "range": "± 10056.308626963475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259271.6049382716,
            "unit": "ns",
            "range": "± 13656.722104589202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248803,
            "unit": "ns",
            "range": "± 20365.555467380444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4087173.3333333335,
            "unit": "ns",
            "range": "± 63115.534273795594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3760806.25,
            "unit": "ns",
            "range": "± 70885.79988262811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22652.577319587628,
            "unit": "ns",
            "range": "± 2540.918993178828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97379,
            "unit": "ns",
            "range": "± 9524.46392881579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74144.68085106384,
            "unit": "ns",
            "range": "± 5535.173298591096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101603.2258064516,
            "unit": "ns",
            "range": "± 11969.712244669725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5744.791666666667,
            "unit": "ns",
            "range": "± 1142.1927011965481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19245.744680851065,
            "unit": "ns",
            "range": "± 2015.7799469005142"
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
          "id": "131fc3bc457b025d8d2de0762acb51fbcf6d85dc",
          "message": "Removed IValidatorSupportStateDelta",
          "timestamp": "2023-06-26T15:17:18+09:00",
          "tree_id": "8836faf6bc4ad702d6ef67200d7e7920548019a0",
          "url": "https://github.com/greymistcube/libplanet/commit/131fc3bc457b025d8d2de0762acb51fbcf6d85dc"
        },
        "date": 1687761412800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1496196,
            "unit": "ns",
            "range": "± 128378.92690284988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2741383.0508474577,
            "unit": "ns",
            "range": "± 120741.23963730263"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2315224.4680851065,
            "unit": "ns",
            "range": "± 152542.47685263827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5388833.333333333,
            "unit": "ns",
            "range": "± 129165.5044360989"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51911.70212765958,
            "unit": "ns",
            "range": "± 4518.1558799447475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7533547.5,
            "unit": "ns",
            "range": "± 267234.37373663264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20402946.666666668,
            "unit": "ns",
            "range": "± 183040.91606081126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51536813.333333336,
            "unit": "ns",
            "range": "± 765623.1970163416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104151573.33333333,
            "unit": "ns",
            "range": "± 1650440.0925929106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206454526.66666666,
            "unit": "ns",
            "range": "± 1118017.626660604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4894764.947916667,
            "unit": "ns",
            "range": "± 14313.709359931077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536284.2838541667,
            "unit": "ns",
            "range": "± 7003.17927888935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187482.5520833333,
            "unit": "ns",
            "range": "± 4475.7136340888255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658142.606026786,
            "unit": "ns",
            "range": "± 6547.409888536405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825221.26953125,
            "unit": "ns",
            "range": "± 2879.1717895920706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762084.74609375,
            "unit": "ns",
            "range": "± 2241.9772774108924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3315975,
            "unit": "ns",
            "range": "± 76061.15873703906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3616695.5555555555,
            "unit": "ns",
            "range": "± 130746.3261356884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4375050,
            "unit": "ns",
            "range": "± 133827.24781622208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4497193.333333333,
            "unit": "ns",
            "range": "± 82856.46337980835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6793881.25,
            "unit": "ns",
            "range": "± 133050.46270118718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280473.21428571426,
            "unit": "ns",
            "range": "± 11938.349072272455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275238.1443298969,
            "unit": "ns",
            "range": "± 15902.374320227109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268405.4347826087,
            "unit": "ns",
            "range": "± 15050.919902742717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4183886.6666666665,
            "unit": "ns",
            "range": "± 41658.06158762184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3795685.714285714,
            "unit": "ns",
            "range": "± 55392.03784970235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25076.041666666668,
            "unit": "ns",
            "range": "± 3144.6778695931275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103561.85567010309,
            "unit": "ns",
            "range": "± 9338.645548862278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89388.77551020408,
            "unit": "ns",
            "range": "± 9285.17977389888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113396.8085106383,
            "unit": "ns",
            "range": "± 14543.09651936408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7412.244897959184,
            "unit": "ns",
            "range": "± 1284.6649293274118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24341.666666666668,
            "unit": "ns",
            "range": "± 2520.5958638329803"
          }
        ]
      }
    ]
  }
}