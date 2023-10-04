window.BENCHMARK_DATA = {
  "lastUpdate": 1696393031152,
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
          "id": "250e4a8e03fcdb06cb573e4e3b48f0e1adec3685",
          "message": "Changed Evaluate to require base state root hash",
          "timestamp": "2023-10-04T12:55:22+09:00",
          "tree_id": "5cc7f9988adcf7a5928fa466c2a438ae65723157",
          "url": "https://github.com/greymistcube/libplanet/commit/250e4a8e03fcdb06cb573e4e3b48f0e1adec3685"
        },
        "date": 1696392974418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61742.836956521736,
            "unit": "ns",
            "range": "± 13540.021596779547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8495917.634408602,
            "unit": "ns",
            "range": "± 479215.1622255776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24215388.74,
            "unit": "ns",
            "range": "± 1845438.7556208814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60678762.37,
            "unit": "ns",
            "range": "± 3549586.3351591295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120267781.61797753,
            "unit": "ns",
            "range": "± 6385666.872236461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243717932.82474226,
            "unit": "ns",
            "range": "± 14137331.5134789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325326.43298969074,
            "unit": "ns",
            "range": "± 43043.4799035394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325839.96907216497,
            "unit": "ns",
            "range": "± 39282.06870121468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270341.71875,
            "unit": "ns",
            "range": "± 35095.405958976015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4551665.255319149,
            "unit": "ns",
            "range": "± 308150.1766898709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4331942.760416667,
            "unit": "ns",
            "range": "± 258277.5186374347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32212,
            "unit": "ns",
            "range": "± 9811.726159269316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106881.25,
            "unit": "ns",
            "range": "± 20166.68293732851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96193.28260869565,
            "unit": "ns",
            "range": "± 13591.870120399331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107481.15789473684,
            "unit": "ns",
            "range": "± 20445.464364267904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5942.435294117647,
            "unit": "ns",
            "range": "± 1077.8248758611994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30415.51020408163,
            "unit": "ns",
            "range": "± 9086.304548911226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1461171.0202020202,
            "unit": "ns",
            "range": "± 199678.71194603632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2810959.3229166665,
            "unit": "ns",
            "range": "± 206550.6115043755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2347922.3232323234,
            "unit": "ns",
            "range": "± 288062.0192802461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10948258.242105262,
            "unit": "ns",
            "range": "± 1012033.0032235906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5590112.886160715,
            "unit": "ns",
            "range": "± 130582.5543150584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2020099.0835129311,
            "unit": "ns",
            "range": "± 58638.7212836095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234071.913969494,
            "unit": "ns",
            "range": "± 28095.83525525267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2844131.570172991,
            "unit": "ns",
            "range": "± 81113.17798862801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 915079.7174136513,
            "unit": "ns",
            "range": "± 19986.348208926836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889113.7031947544,
            "unit": "ns",
            "range": "± 11051.873436584614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3562354.84375,
            "unit": "ns",
            "range": "± 261082.99799038813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4408137.969072165,
            "unit": "ns",
            "range": "± 305235.8580577981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4965085.08,
            "unit": "ns",
            "range": "± 331302.0882698648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4500597.142857143,
            "unit": "ns",
            "range": "± 404014.62204681267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12929376.908045977,
            "unit": "ns",
            "range": "± 766922.1893342856"
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
          "id": "3e390e89dc614b57de77d1470d1f94ccc3786631",
          "message": "Changelog",
          "timestamp": "2023-10-04T12:59:56+09:00",
          "tree_id": "1847fdc365e95467fdda18d024cbc0ab419b26f3",
          "url": "https://github.com/greymistcube/libplanet/commit/3e390e89dc614b57de77d1470d1f94ccc3786631"
        },
        "date": 1696393021788,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57757.42391304348,
            "unit": "ns",
            "range": "± 4223.338646594361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9973636.785714285,
            "unit": "ns",
            "range": "± 175160.01384061048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27731858.14285714,
            "unit": "ns",
            "range": "± 790504.4910126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67909938.93333334,
            "unit": "ns",
            "range": "± 393207.39467804425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135277848,
            "unit": "ns",
            "range": "± 1238395.2960168712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270604682.53333336,
            "unit": "ns",
            "range": "± 2738604.0077707176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337073.35,
            "unit": "ns",
            "range": "± 15027.302633365238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332048.5070422535,
            "unit": "ns",
            "range": "± 15497.090125820618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296269.3658536585,
            "unit": "ns",
            "range": "± 10437.300948415968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5433745.266666667,
            "unit": "ns",
            "range": "± 68747.10909191192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4988609.583333333,
            "unit": "ns",
            "range": "± 76124.33834966477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26467.81443298969,
            "unit": "ns",
            "range": "± 2174.4606483078787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107589.55789473685,
            "unit": "ns",
            "range": "± 6597.255441140285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101048.73958333333,
            "unit": "ns",
            "range": "± 12153.33715854884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96253.0625,
            "unit": "ns",
            "range": "± 14739.066217521166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6312.40625,
            "unit": "ns",
            "range": "± 913.9360633876564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21932.34736842105,
            "unit": "ns",
            "range": "± 1509.3708550424285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634979.1641791044,
            "unit": "ns",
            "range": "± 74346.41130822677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3112822,
            "unit": "ns",
            "range": "± 86704.37773261509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2449433.870967742,
            "unit": "ns",
            "range": "± 108690.44860814045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11266174.554347826,
            "unit": "ns",
            "range": "± 794284.706183714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6056111.717548077,
            "unit": "ns",
            "range": "± 13574.56748450522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1883624.7041015625,
            "unit": "ns",
            "range": "± 2595.7190261635224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1275625.1868024555,
            "unit": "ns",
            "range": "± 1940.4190464563635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3139780.5544084823,
            "unit": "ns",
            "range": "± 2234.238351803715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1016188.1911458333,
            "unit": "ns",
            "range": "± 1967.384199922227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 899249.0616629465,
            "unit": "ns",
            "range": "± 378.6430961114063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4444770.192307692,
            "unit": "ns",
            "range": "± 118335.98594511113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4688531.933333334,
            "unit": "ns",
            "range": "± 86463.25261674271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5583931.057142857,
            "unit": "ns",
            "range": "± 180154.8701690956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5376700.661016949,
            "unit": "ns",
            "range": "± 235717.03228883466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13038379.978723405,
            "unit": "ns",
            "range": "± 417844.4305230737"
          }
        ]
      }
    ]
  }
}