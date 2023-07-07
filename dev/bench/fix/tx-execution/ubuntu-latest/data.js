window.BENCHMARK_DATA = {
  "lastUpdate": 1688725642302,
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
          "id": "c6666c552fccd7852bb136bc2ab2f9583e6e8c94",
          "message": "Align with changed spec",
          "timestamp": "2023-07-07T19:08:19+09:00",
          "tree_id": "850c7723dcc2192085bf7c27cb7c000e2d820f0b",
          "url": "https://github.com/greymistcube/libplanet/commit/c6666c552fccd7852bb136bc2ab2f9583e6e8c94"
        },
        "date": 1688725566171,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334821.329787234,
            "unit": "ns",
            "range": "± 26702.32189146568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317371.670212766,
            "unit": "ns",
            "range": "± 31118.40277930781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260328.8085106383,
            "unit": "ns",
            "range": "± 20688.736082047522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4570921.97979798,
            "unit": "ns",
            "range": "± 295718.81413816963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4728402.440860215,
            "unit": "ns",
            "range": "± 264091.7914512771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21573.86,
            "unit": "ns",
            "range": "± 6527.126280006502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96011.3125,
            "unit": "ns",
            "range": "± 11026.699133240192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87631.73958333333,
            "unit": "ns",
            "range": "± 14830.202749258046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115899.47311827957,
            "unit": "ns",
            "range": "± 16223.865275247395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10834.081632653062,
            "unit": "ns",
            "range": "± 6060.698479146036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20853.89,
            "unit": "ns",
            "range": "± 6465.496215373578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1516813.0947368422,
            "unit": "ns",
            "range": "± 124275.74010840141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3146124.5483870967,
            "unit": "ns",
            "range": "± 243578.11142426412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169475.787234043,
            "unit": "ns",
            "range": "± 175029.89243492726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6260222.151515151,
            "unit": "ns",
            "range": "± 529199.9021832703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6878715.5368695175,
            "unit": "ns",
            "range": "± 298570.8811906006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2193870.470145089,
            "unit": "ns",
            "range": "± 19078.01728154444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1614562.8272879464,
            "unit": "ns",
            "range": "± 22116.885126740202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3088074.0052083335,
            "unit": "ns",
            "range": "± 37228.744445659366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011375.2921316965,
            "unit": "ns",
            "range": "± 16904.425790151414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937331.0528041294,
            "unit": "ns",
            "range": "± 7384.733910514815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3492789.206185567,
            "unit": "ns",
            "range": "± 260624.36755090882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3635254.2959183673,
            "unit": "ns",
            "range": "± 279796.7212639672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4554452.43298969,
            "unit": "ns",
            "range": "± 339276.5752981478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4213738.635416667,
            "unit": "ns",
            "range": "± 359085.67669879855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7257037.6632653065,
            "unit": "ns",
            "range": "± 485433.40680512687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8453137.602150537,
            "unit": "ns",
            "range": "± 478934.20010273496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21810882.032786883,
            "unit": "ns",
            "range": "± 944858.9706853429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55484272.04054054,
            "unit": "ns",
            "range": "± 2747141.403823411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107300704.57692307,
            "unit": "ns",
            "range": "± 2934880.7876309413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219700296.41304347,
            "unit": "ns",
            "range": "± 8346061.600805623"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61953.10526315789,
            "unit": "ns",
            "range": "± 8067.285091947552"
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
          "id": "2687fe01d517c7a827a8b221a83126684a56abb3",
          "message": "[skip changelog] Align with changed spec",
          "timestamp": "2023-07-07T19:12:16+09:00",
          "tree_id": "850c7723dcc2192085bf7c27cb7c000e2d820f0b",
          "url": "https://github.com/greymistcube/libplanet/commit/2687fe01d517c7a827a8b221a83126684a56abb3"
        },
        "date": 1688725634659,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312113.48,
            "unit": "ns",
            "range": "± 11145.981368316438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303071.11320754717,
            "unit": "ns",
            "range": "± 12511.246112783087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278356.2,
            "unit": "ns",
            "range": "± 4049.5233264457897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4707787.538461538,
            "unit": "ns",
            "range": "± 16493.11041321691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4213322.571428572,
            "unit": "ns",
            "range": "± 27602.533291527612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23200.326315789473,
            "unit": "ns",
            "range": "± 1632.489356402729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98691.05555555556,
            "unit": "ns",
            "range": "± 5155.097951011149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93352.49494949495,
            "unit": "ns",
            "range": "± 6030.475739133718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109733.24742268042,
            "unit": "ns",
            "range": "± 12196.642450410045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6643.118279569892,
            "unit": "ns",
            "range": "± 659.4489275385854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22953.876288659794,
            "unit": "ns",
            "range": "± 2560.602282088353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583444.71875,
            "unit": "ns",
            "range": "± 106083.93302720287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2960299.3055555555,
            "unit": "ns",
            "range": "± 98146.11724765113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2036726.7395833333,
            "unit": "ns",
            "range": "± 120244.97785527544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5613422.0784313725,
            "unit": "ns",
            "range": "± 228606.67527032917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6297719.011458334,
            "unit": "ns",
            "range": "± 35609.96326337873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920172.0359933036,
            "unit": "ns",
            "range": "± 972.7101343448608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392723.7166666666,
            "unit": "ns",
            "range": "± 3654.289651221468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2660951.3190104165,
            "unit": "ns",
            "range": "± 4127.396464238205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837249.3898925781,
            "unit": "ns",
            "range": "± 273.5953460902291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773641.1056640625,
            "unit": "ns",
            "range": "± 242.64594810813867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3795310.2666666666,
            "unit": "ns",
            "range": "± 32533.045330790017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4008643.0303030303,
            "unit": "ns",
            "range": "± 126336.45861064928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4829955.533333333,
            "unit": "ns",
            "range": "± 80191.04501828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4488269.8125,
            "unit": "ns",
            "range": "± 84773.91043335502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7056832.333333333,
            "unit": "ns",
            "range": "± 194280.53804109784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8896924.266666668,
            "unit": "ns",
            "range": "± 54526.741018207445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23506434.333333332,
            "unit": "ns",
            "range": "± 171228.07081061156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57893324.692307696,
            "unit": "ns",
            "range": "± 142299.89776078818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116031455.73333333,
            "unit": "ns",
            "range": "± 253889.04560723447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241675272.53333333,
            "unit": "ns",
            "range": "± 469436.8320560692"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51518.89247311828,
            "unit": "ns",
            "range": "± 3614.8261473089988"
          }
        ]
      }
    ]
  }
}