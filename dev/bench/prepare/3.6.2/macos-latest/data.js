window.BENCHMARK_DATA = {
  "lastUpdate": 1700490097545,
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
          "id": "68fb469d52639418c8785c2512f1e18452defbab",
          "message": "Prepare 3.6.2",
          "timestamp": "2023-11-20T22:56:39+09:00",
          "tree_id": "69a7248c31c7f108ea18b3dde4f848df24bca099",
          "url": "https://github.com/greymistcube/libplanet/commit/68fb469d52639418c8785c2512f1e18452defbab"
        },
        "date": 1700490079883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9567506.813559322,
            "unit": "ns",
            "range": "± 420817.4106846011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22791067.583333332,
            "unit": "ns",
            "range": "± 574898.7265098102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57397353.62264151,
            "unit": "ns",
            "range": "± 2347305.643548767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100261938.9361702,
            "unit": "ns",
            "range": "± 6226739.586340444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199649272.56962025,
            "unit": "ns",
            "range": "± 10303859.999742476"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54543.48387096774,
            "unit": "ns",
            "range": "± 11224.834258109096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250409.45744680852,
            "unit": "ns",
            "range": "± 26020.038090157046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261378.63440860214,
            "unit": "ns",
            "range": "± 26402.39164306116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243697.8777777778,
            "unit": "ns",
            "range": "± 29438.530708624825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4329312.908163265,
            "unit": "ns",
            "range": "± 371797.99760828126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4068778,
            "unit": "ns",
            "range": "± 300680.1007066031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20575.395604395606,
            "unit": "ns",
            "range": "± 4374.189176621119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90414.70652173914,
            "unit": "ns",
            "range": "± 12832.750316792724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96309.62,
            "unit": "ns",
            "range": "± 3845.476339964204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82985.3956043956,
            "unit": "ns",
            "range": "± 9328.505692981082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8996.51030927835,
            "unit": "ns",
            "range": "± 1973.1698191765654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23209.41489361702,
            "unit": "ns",
            "range": "± 4438.8827215032015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1182407.2795698924,
            "unit": "ns",
            "range": "± 187916.26173050806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2638664.75,
            "unit": "ns",
            "range": "± 347004.39278521173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2080371.742105263,
            "unit": "ns",
            "range": "± 196576.87312069253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10493293.18041237,
            "unit": "ns",
            "range": "± 2426480.181162128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2906607.3483146066,
            "unit": "ns",
            "range": "± 148219.39727141752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2995233.3846153845,
            "unit": "ns",
            "range": "± 37295.10335048124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3561764.1458333335,
            "unit": "ns",
            "range": "± 140353.0760569897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3423349.0714285714,
            "unit": "ns",
            "range": "± 50920.312415901055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12659794.927083334,
            "unit": "ns",
            "range": "± 2075728.455226668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5283362.355720766,
            "unit": "ns",
            "range": "± 515633.15706879797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1680197.2263208763,
            "unit": "ns",
            "range": "± 173997.64734194233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 964137.9064513531,
            "unit": "ns",
            "range": "± 114186.70887203448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2118893.626519097,
            "unit": "ns",
            "range": "± 69651.3495723192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 726416.6900255927,
            "unit": "ns",
            "range": "± 20936.840996477713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 645220.1884321733,
            "unit": "ns",
            "range": "± 24013.741267606358"
          }
        ]
      }
    ]
  }
}