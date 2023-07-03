window.BENCHMARK_DATA = {
  "lastUpdate": 1688363152984,
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
          "id": "40e474810f4076eb8ae7203ff0398dd16bf6761c",
          "message": "Removed unnecessary test code",
          "timestamp": "2023-07-03T14:32:26+09:00",
          "tree_id": "5bc7664ab85a5a6c12539623f802448c4de57bcd",
          "url": "https://github.com/greymistcube/libplanet/commit/40e474810f4076eb8ae7203ff0398dd16bf6761c"
        },
        "date": 1688363145826,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7980566.071428572,
            "unit": "ns",
            "range": "± 28141.62123005787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21690530.5,
            "unit": "ns",
            "range": "± 393282.4110020686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55528992.54545455,
            "unit": "ns",
            "range": "± 1360539.1277701966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107754074.16666667,
            "unit": "ns",
            "range": "± 2257920.1215756387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213945502.42857143,
            "unit": "ns",
            "range": "± 4764846.96977381"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46430.38461538462,
            "unit": "ns",
            "range": "± 2317.7537840324203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285442.7619047619,
            "unit": "ns",
            "range": "± 10319.426770356833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279441.7073170732,
            "unit": "ns",
            "range": "± 9210.127524209158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241520.83720930232,
            "unit": "ns",
            "range": "± 8946.884844751783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4462876,
            "unit": "ns",
            "range": "± 56923.965004707316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3914282.4,
            "unit": "ns",
            "range": "± 71381.61997301146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18005.63829787234,
            "unit": "ns",
            "range": "± 1124.4594481618767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87080.56842105264,
            "unit": "ns",
            "range": "± 6664.307118942517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71354.6,
            "unit": "ns",
            "range": "± 1266.5281453079292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90853.76530612246,
            "unit": "ns",
            "range": "± 13011.670980594212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5047.4315789473685,
            "unit": "ns",
            "range": "± 691.2498648013654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17149.709677419356,
            "unit": "ns",
            "range": "± 1271.1190514886887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1474587.206185567,
            "unit": "ns",
            "range": "± 85316.07774389817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2809653.506849315,
            "unit": "ns",
            "range": "± 139133.47965234713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1845436.3333333333,
            "unit": "ns",
            "range": "± 118069.14505694192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4941175.914285715,
            "unit": "ns",
            "range": "± 157739.5333560195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6147365.708333333,
            "unit": "ns",
            "range": "± 39231.24043770912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1929536.821484375,
            "unit": "ns",
            "range": "± 12984.001043047912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382928.6071614583,
            "unit": "ns",
            "range": "± 4179.608197034234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657099.5731770834,
            "unit": "ns",
            "range": "± 6794.390509757732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849294.6311848959,
            "unit": "ns",
            "range": "± 2748.8662215418176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789062.1798177083,
            "unit": "ns",
            "range": "± 2190.64464053889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3497766.933333333,
            "unit": "ns",
            "range": "± 53162.85765250916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3563989.1428571427,
            "unit": "ns",
            "range": "± 141832.69332635665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4546404.358974359,
            "unit": "ns",
            "range": "± 158351.09617131553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4027210.0967741935,
            "unit": "ns",
            "range": "± 121624.94707483737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6695737.303571428,
            "unit": "ns",
            "range": "± 286970.02624353516"
          }
        ]
      }
    ]
  }
}