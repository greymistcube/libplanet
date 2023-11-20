window.BENCHMARK_DATA = {
  "lastUpdate": 1700475196873,
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
          "id": "585f4ed3ed66691c663e6e789ea87a50001ec8ea",
          "message": "Prepare 3.6.2",
          "timestamp": "2023-11-20T18:48:09+09:00",
          "tree_id": "1a049c226a0684bcc3f69f0003f0d7a1bb370460",
          "url": "https://github.com/greymistcube/libplanet/commit/585f4ed3ed66691c663e6e789ea87a50001ec8ea"
        },
        "date": 1700475182140,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13135888.863636363,
            "unit": "ns",
            "range": "± 2769721.533994165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29463005.17525773,
            "unit": "ns",
            "range": "± 4916946.5898525175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72475664.31578948,
            "unit": "ns",
            "range": "± 11540904.616761435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118811671.84042554,
            "unit": "ns",
            "range": "± 18918379.610266782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 318313070.37113404,
            "unit": "ns",
            "range": "± 57274568.88634125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71725.5306122449,
            "unit": "ns",
            "range": "± 18031.959175882766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388475.1,
            "unit": "ns",
            "range": "± 106150.06217268002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354212.7010309278,
            "unit": "ns",
            "range": "± 97813.0389069462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285244.15934065933,
            "unit": "ns",
            "range": "± 52614.96088486615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5514805.020408163,
            "unit": "ns",
            "range": "± 1273930.6983359258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4459176.392473118,
            "unit": "ns",
            "range": "± 347495.49773015396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18479.247368421053,
            "unit": "ns",
            "range": "± 3720.355347842693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91116.75581395348,
            "unit": "ns",
            "range": "± 13496.044793970128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88940.54838709677,
            "unit": "ns",
            "range": "± 9854.17986850176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73146.91397849462,
            "unit": "ns",
            "range": "± 9771.345025185405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5136.394736842105,
            "unit": "ns",
            "range": "± 1122.9673028498546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15368.639175257733,
            "unit": "ns",
            "range": "± 2300.67575754733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1634612.7210526315,
            "unit": "ns",
            "range": "± 470158.52880851453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3918321.2717391304,
            "unit": "ns",
            "range": "± 1111332.866242283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2685598.5773195876,
            "unit": "ns",
            "range": "± 691152.283927519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9491407.421052631,
            "unit": "ns",
            "range": "± 1909003.1301768278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4447450.664948453,
            "unit": "ns",
            "range": "± 970033.1166736943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4104145.822222222,
            "unit": "ns",
            "range": "± 598641.4694627014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4149846.214285714,
            "unit": "ns",
            "range": "± 71925.88504033277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4377400.2441860465,
            "unit": "ns",
            "range": "± 544267.6140501254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16852992.663043477,
            "unit": "ns",
            "range": "± 3942005.4933013935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4548745.174739583,
            "unit": "ns",
            "range": "± 201510.25199470142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1544845.0859175702,
            "unit": "ns",
            "range": "± 173227.6704188859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 899993.9262201545,
            "unit": "ns",
            "range": "± 49617.99819486473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2005655.0018229166,
            "unit": "ns",
            "range": "± 30307.814811858196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 741668.6439247533,
            "unit": "ns",
            "range": "± 56881.47915507149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569487.0166015625,
            "unit": "ns",
            "range": "± 2641.844022684417"
          }
        ]
      }
    ]
  }
}