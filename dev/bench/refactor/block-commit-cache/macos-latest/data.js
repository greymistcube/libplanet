window.BENCHMARK_DATA = {
  "lastUpdate": 1678677480097,
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
          "id": "9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad",
          "message": "Added test for forking",
          "timestamp": "2023-03-13T10:44:44+09:00",
          "tree_id": "f9eb705af2c77b510ecdaf84c43ffe709d979a1d",
          "url": "https://github.com/greymistcube/libplanet/commit/9c6fc6eb88e1e82deaf22bdb61cc723bfb1d15ad"
        },
        "date": 1678672932751,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8718231.9,
            "unit": "ns",
            "range": "± 329033.4270138411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23560195.941860463,
            "unit": "ns",
            "range": "± 3950854.8154667555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52754038.17391305,
            "unit": "ns",
            "range": "± 1139172.8917598166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107767070.74193548,
            "unit": "ns",
            "range": "± 3194083.0056477557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 211215620.62962964,
            "unit": "ns",
            "range": "± 5822223.2634490505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72472.13043478261,
            "unit": "ns",
            "range": "± 10914.280095580185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203125.08602150538,
            "unit": "ns",
            "range": "± 12491.518591024518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218882.10638297873,
            "unit": "ns",
            "range": "± 26847.017097665143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195273.2052631579,
            "unit": "ns",
            "range": "± 18395.77316209773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12124577.476190476,
            "unit": "ns",
            "range": "± 288282.70005441166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9881165.166666666,
            "unit": "ns",
            "range": "± 170243.06353969596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21709.932989690722,
            "unit": "ns",
            "range": "± 3916.3946002329326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57227.55789473684,
            "unit": "ns",
            "range": "± 8729.368399462097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55829.73469387755,
            "unit": "ns",
            "range": "± 6047.299214075414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118082.01086956522,
            "unit": "ns",
            "range": "± 15159.800852945906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7171.726315789474,
            "unit": "ns",
            "range": "± 1173.6850264536008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17898.775280898877,
            "unit": "ns",
            "range": "± 2515.860822104475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645500.547368421,
            "unit": "ns",
            "range": "± 208728.3747973116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2921274.9156626505,
            "unit": "ns",
            "range": "± 155026.231708104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2570333.595505618,
            "unit": "ns",
            "range": "± 218006.73703610623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6498393.697916667,
            "unit": "ns",
            "range": "± 403764.66871112253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3418498.78125,
            "unit": "ns",
            "range": "± 142455.38098930672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5229107.111111111,
            "unit": "ns",
            "range": "± 110709.20045891234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23694378.333333332,
            "unit": "ns",
            "range": "± 696178.4658636122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6338871.111111111,
            "unit": "ns",
            "range": "± 231580.1618322204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28350386.75471698,
            "unit": "ns",
            "range": "± 1176589.2390476658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7089455.820790816,
            "unit": "ns",
            "range": "± 282474.2081050984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2019005.8501674107,
            "unit": "ns",
            "range": "± 27481.00287403242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295059.622578125,
            "unit": "ns",
            "range": "± 33740.991469698325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2726901.3505284926,
            "unit": "ns",
            "range": "± 52319.307785827295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851225.7454927885,
            "unit": "ns",
            "range": "± 8058.7980863993525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736001.9194178428,
            "unit": "ns",
            "range": "± 21700.90244212408"
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
          "id": "3548bcca70176accabec0ad9c52cede62079d0f8",
          "message": "Changelog",
          "timestamp": "2023-03-13T11:57:05+09:00",
          "tree_id": "f8a594a2f58365c2a259a9e7f236d46f03039676",
          "url": "https://github.com/greymistcube/libplanet/commit/3548bcca70176accabec0ad9c52cede62079d0f8"
        },
        "date": 1678677465754,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9672587.603092784,
            "unit": "ns",
            "range": "± 1644270.5645741676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21463083.083333332,
            "unit": "ns",
            "range": "± 217194.95960519323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53522493.5,
            "unit": "ns",
            "range": "± 1079628.8764058205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 124210191.98351648,
            "unit": "ns",
            "range": "± 27212705.118600562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 217098015.3846154,
            "unit": "ns",
            "range": "± 1800940.4047817416"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80614.5632183908,
            "unit": "ns",
            "range": "± 6049.28222669155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245741.26842105263,
            "unit": "ns",
            "range": "± 36524.43051166054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237173.75531914894,
            "unit": "ns",
            "range": "± 28890.989893579026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233612.9947368421,
            "unit": "ns",
            "range": "± 36710.470955925135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13415852.081632653,
            "unit": "ns",
            "range": "± 781768.4269266933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9952328.378378378,
            "unit": "ns",
            "range": "± 337566.5467069133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20144.026315789473,
            "unit": "ns",
            "range": "± 3027.4458508153807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59703.45789473684,
            "unit": "ns",
            "range": "± 8497.895153551935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59869.66216216216,
            "unit": "ns",
            "range": "± 2028.4173703970612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 131662.4347826087,
            "unit": "ns",
            "range": "± 17836.96094840208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7738.5625,
            "unit": "ns",
            "range": "± 932.4269387210086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21289.770833333332,
            "unit": "ns",
            "range": "± 5209.560620889183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1706602.3563218392,
            "unit": "ns",
            "range": "± 201790.29031115433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2930232.028169014,
            "unit": "ns",
            "range": "± 143393.61189048557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2732701.2916666665,
            "unit": "ns",
            "range": "± 292847.668904282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6749215.247368421,
            "unit": "ns",
            "range": "± 592474.2148171974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3438894.4574468085,
            "unit": "ns",
            "range": "± 131539.9955088809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5299905.722222222,
            "unit": "ns",
            "range": "± 175386.65144834566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24954020.166666668,
            "unit": "ns",
            "range": "± 335134.4392388708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7401246.252631579,
            "unit": "ns",
            "range": "± 720061.530195872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35179596.56315789,
            "unit": "ns",
            "range": "± 2767499.5137393675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7085683.86328125,
            "unit": "ns",
            "range": "± 213598.24345814437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2040495.43359375,
            "unit": "ns",
            "range": "± 57654.694874993256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1387312.9394867995,
            "unit": "ns",
            "range": "± 37664.31218951821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3050367.58875,
            "unit": "ns",
            "range": "± 153739.56342407505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 929813.2173019935,
            "unit": "ns",
            "range": "± 40254.5155719168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754150.1016773897,
            "unit": "ns",
            "range": "± 14952.399923213909"
          }
        ]
      }
    ]
  }
}