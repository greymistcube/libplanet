window.BENCHMARK_DATA = {
  "lastUpdate": 1687335100892,
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
          "id": "18cc285cffeaed343ba3bc79a86a96bba93fafe2",
          "message": "Added BlockProtocolVersion to IActionContext",
          "timestamp": "2023-06-21T16:41:11+09:00",
          "tree_id": "b2895b8b288da583d37e3a26a24c1fe1c342d8a9",
          "url": "https://github.com/greymistcube/libplanet/commit/18cc285cffeaed343ba3bc79a86a96bba93fafe2"
        },
        "date": 1687334641611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13198217.1,
            "unit": "ns",
            "range": "± 3526633.156502016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30295466.78888889,
            "unit": "ns",
            "range": "± 11050399.473112272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 89643922.15625,
            "unit": "ns",
            "range": "± 45183473.56022112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125637827.92222223,
            "unit": "ns",
            "range": "± 24980364.397068843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231735741.91111112,
            "unit": "ns",
            "range": "± 17464720.014557354"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73835.49425287357,
            "unit": "ns",
            "range": "± 10583.64792352583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369306.16483516485,
            "unit": "ns",
            "range": "± 45018.65435060442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322772.14835164836,
            "unit": "ns",
            "range": "± 38078.5556764999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306803.7315789474,
            "unit": "ns",
            "range": "± 26521.53465299578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4373417.829896907,
            "unit": "ns",
            "range": "± 307275.4972233021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3888733.25,
            "unit": "ns",
            "range": "± 159236.56179517327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19753.2,
            "unit": "ns",
            "range": "± 3718.1566314734796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101438.98947368421,
            "unit": "ns",
            "range": "± 17445.947597184793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117077.8021978022,
            "unit": "ns",
            "range": "± 11840.20304745168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110154.3085106383,
            "unit": "ns",
            "range": "± 12163.791552418164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8024.1505376344085,
            "unit": "ns",
            "range": "± 1534.9758385454102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23447.673684210527,
            "unit": "ns",
            "range": "± 4900.139866527706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1814001.0326086956,
            "unit": "ns",
            "range": "± 389380.5502296317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3382604.33908046,
            "unit": "ns",
            "range": "± 450505.65363300324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2866234.8333333335,
            "unit": "ns",
            "range": "± 439338.19345636666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9233818.083333334,
            "unit": "ns",
            "range": "± 2451645.5523470105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3794928.433333333,
            "unit": "ns",
            "range": "± 452107.65674895927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4307273.965909091,
            "unit": "ns",
            "range": "± 604749.7476553945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5235479.302083333,
            "unit": "ns",
            "range": "± 611322.0602385176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4904772.455555555,
            "unit": "ns",
            "range": "± 608565.8277660216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8179779.615789474,
            "unit": "ns",
            "range": "± 623799.5336353994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6817778.959435096,
            "unit": "ns",
            "range": "± 180040.4330627565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2420093.939583333,
            "unit": "ns",
            "range": "± 178155.49078020264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1564671.7596484376,
            "unit": "ns",
            "range": "± 93546.43885483503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3802326.6435746173,
            "unit": "ns",
            "range": "± 251193.88995718386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856453.0950382313,
            "unit": "ns",
            "range": "± 32862.88946317158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880689.8711480035,
            "unit": "ns",
            "range": "± 18172.54918071909"
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
          "id": "17c4502bc80ff22b8888b337bcc8626659f4e3b9",
          "message": "Changelog",
          "timestamp": "2023-06-21T16:45:58+09:00",
          "tree_id": "3d8097d8dd8bb6549ca37a3070712065570030ec",
          "url": "https://github.com/greymistcube/libplanet/commit/17c4502bc80ff22b8888b337bcc8626659f4e3b9"
        },
        "date": 1687335087587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10316562.290697675,
            "unit": "ns",
            "range": "± 1277457.4119181393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23949709.348837208,
            "unit": "ns",
            "range": "± 1472479.3700261232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59653088.35789473,
            "unit": "ns",
            "range": "± 5579679.349599352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115046017.68888889,
            "unit": "ns",
            "range": "± 11984001.401786061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213863697.7647059,
            "unit": "ns",
            "range": "± 6462703.808599805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81939.73033707865,
            "unit": "ns",
            "range": "± 12595.450930038234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372389.9789473684,
            "unit": "ns",
            "range": "± 63101.95460555961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342658.2444444444,
            "unit": "ns",
            "range": "± 30186.790687806864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320443.7888888889,
            "unit": "ns",
            "range": "± 25058.528975380566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4397900.425531914,
            "unit": "ns",
            "range": "± 247038.14932478944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3998267.21875,
            "unit": "ns",
            "range": "± 121655.80624801198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18302.59574468085,
            "unit": "ns",
            "range": "± 2507.462377934291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97163.36559139784,
            "unit": "ns",
            "range": "± 14718.635693203296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104182.81052631579,
            "unit": "ns",
            "range": "± 17360.270941296025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108400.60638297872,
            "unit": "ns",
            "range": "± 13924.934430237381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6735.79381443299,
            "unit": "ns",
            "range": "± 1354.1642405476546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18748.864583333332,
            "unit": "ns",
            "range": "± 4029.4418422923877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2033043.625,
            "unit": "ns",
            "range": "± 532137.5563424682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3714062.2,
            "unit": "ns",
            "range": "± 676620.2000430041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3098912.0459770113,
            "unit": "ns",
            "range": "± 466506.4024910955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10197457.635416666,
            "unit": "ns",
            "range": "± 2768478.6093725027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3355102.811111111,
            "unit": "ns",
            "range": "± 211148.9610345491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3524735.5773195876,
            "unit": "ns",
            "range": "± 207676.53804869822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5004562.630434782,
            "unit": "ns",
            "range": "± 415423.4145577208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4572160.737113402,
            "unit": "ns",
            "range": "± 339819.0574440797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8513137.989361702,
            "unit": "ns",
            "range": "± 786856.7206383318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7582736.495253164,
            "unit": "ns",
            "range": "± 392074.0825308499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2049427.7628038195,
            "unit": "ns",
            "range": "± 43322.05645705278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1530480.2588541666,
            "unit": "ns",
            "range": "± 67321.03032463622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2893861.270024671,
            "unit": "ns",
            "range": "± 182077.21865893702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 907705.2865053157,
            "unit": "ns",
            "range": "± 56588.27097947732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904321.5733477619,
            "unit": "ns",
            "range": "± 30454.195223130508"
          }
        ]
      }
    ]
  }
}