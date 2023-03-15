window.BENCHMARK_DATA = {
  "lastUpdate": 1678864365601,
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
          "id": "f0a4d366e3d4d6558eb4568a1aae46ad136b5fa0",
          "message": "Fixed tests",
          "timestamp": "2023-03-15T15:02:14+09:00",
          "tree_id": "a7d8c5e42b5615ece555830b147d030d43dfbdd4",
          "url": "https://github.com/greymistcube/libplanet/commit/f0a4d366e3d4d6558eb4568a1aae46ad136b5fa0"
        },
        "date": 1678860897939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193954.085106383,
            "unit": "ns",
            "range": "± 7551.587448516996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196774.77777777778,
            "unit": "ns",
            "range": "± 8265.446472130094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165328.44444444444,
            "unit": "ns",
            "range": "± 3542.614923574396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11387599.8,
            "unit": "ns",
            "range": "± 124792.86599527347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9125466.533333333,
            "unit": "ns",
            "range": "± 67438.60419232833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19120.701030927834,
            "unit": "ns",
            "range": "± 1471.3069598500144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53177.395833333336,
            "unit": "ns",
            "range": "± 5428.178699069798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38970.76470588235,
            "unit": "ns",
            "range": "± 800.6666386059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85205.45918367348,
            "unit": "ns",
            "range": "± 12516.613254562762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4296.895833333333,
            "unit": "ns",
            "range": "± 450.1470748934038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17314.821052631578,
            "unit": "ns",
            "range": "± 1546.7156003894968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3325089.3333333335,
            "unit": "ns",
            "range": "± 59097.77439568948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5179094.434782608,
            "unit": "ns",
            "range": "± 130869.9492427592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23703457.9375,
            "unit": "ns",
            "range": "± 438961.8199642529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6368331.071428572,
            "unit": "ns",
            "range": "± 164587.04006243392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27666947.933333334,
            "unit": "ns",
            "range": "± 283120.36091625836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6289601.4375,
            "unit": "ns",
            "range": "± 21430.306612206965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914893.7119791666,
            "unit": "ns",
            "range": "± 5195.925531178074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372543.8946614584,
            "unit": "ns",
            "range": "± 2880.9705996238213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586234.823958333,
            "unit": "ns",
            "range": "± 3570.1276887151917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824990.8399135044,
            "unit": "ns",
            "range": "± 1096.4091153112713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743017.131266276,
            "unit": "ns",
            "range": "± 551.7705613843927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7684237.266666667,
            "unit": "ns",
            "range": "± 44502.221776745784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19429963.076923076,
            "unit": "ns",
            "range": "± 164637.64888913956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49712827.266666666,
            "unit": "ns",
            "range": "± 421900.9386813562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100496768.07692307,
            "unit": "ns",
            "range": "± 611133.6721657085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 198961704.33333334,
            "unit": "ns",
            "range": "± 2482529.1996089295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45496.16216216216,
            "unit": "ns",
            "range": "± 2199.6672415034063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336812.7765957448,
            "unit": "ns",
            "range": "± 98896.86319445244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2506530.533333333,
            "unit": "ns",
            "range": "± 72819.70517926726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2143282.3902439023,
            "unit": "ns",
            "range": "± 77294.63850645724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5363025.734693877,
            "unit": "ns",
            "range": "± 319997.2253614101"
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
          "id": "957935b3c131a2bd3b40a0af0c79827c262cca80",
          "message": "Changelog",
          "timestamp": "2023-03-15T15:05:02+09:00",
          "tree_id": "ca9f0634fd837ee89a922165df92d7cf9c503206",
          "url": "https://github.com/greymistcube/libplanet/commit/957935b3c131a2bd3b40a0af0c79827c262cca80"
        },
        "date": 1678861027042,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184528.08695652173,
            "unit": "ns",
            "range": "± 7069.8519859599355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188646.32142857142,
            "unit": "ns",
            "range": "± 5227.099698994416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162407.53846153847,
            "unit": "ns",
            "range": "± 2236.9447771229034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11179454.866666667,
            "unit": "ns",
            "range": "± 76724.07698729508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8989204.5,
            "unit": "ns",
            "range": "± 42073.38178934881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24465.59139784946,
            "unit": "ns",
            "range": "± 2234.8278128233223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49698.89247311828,
            "unit": "ns",
            "range": "± 4267.011336893992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37292.230769230766,
            "unit": "ns",
            "range": "± 520.4658416339081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82816.25510204081,
            "unit": "ns",
            "range": "± 12762.508766971936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4395.833333333333,
            "unit": "ns",
            "range": "± 350.0125311039944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15218.936842105262,
            "unit": "ns",
            "range": "± 1222.689456324435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3191576.153846154,
            "unit": "ns",
            "range": "± 70072.40621967669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4944055.133333334,
            "unit": "ns",
            "range": "± 61073.22562987889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23215523,
            "unit": "ns",
            "range": "± 190871.88071695782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5983450.266666667,
            "unit": "ns",
            "range": "± 88966.13402258081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26093339.733333334,
            "unit": "ns",
            "range": "± 284205.15571589343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6218220.840104166,
            "unit": "ns",
            "range": "± 24804.03819250481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1974626.701923077,
            "unit": "ns",
            "range": "± 1648.9661183662688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364969.307421875,
            "unit": "ns",
            "range": "± 4226.882561603612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545233.2170758927,
            "unit": "ns",
            "range": "± 3683.174668398092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830350.48046875,
            "unit": "ns",
            "range": "± 1311.3983208940645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750360.6203264509,
            "unit": "ns",
            "range": "± 474.4223126424262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7600704.928571428,
            "unit": "ns",
            "range": "± 15560.154564509588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19210957.333333332,
            "unit": "ns",
            "range": "± 177269.27405450027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48399710.2,
            "unit": "ns",
            "range": "± 345503.7751572126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97632190.33333333,
            "unit": "ns",
            "range": "± 587756.4174733402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 193276469.07142857,
            "unit": "ns",
            "range": "± 755377.185461823"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44387.86363636364,
            "unit": "ns",
            "range": "± 1879.7286210544298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294599.4235294117,
            "unit": "ns",
            "range": "± 67115.61914770951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2464433.846153846,
            "unit": "ns",
            "range": "± 67280.94298845243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2079807.861111111,
            "unit": "ns",
            "range": "± 102178.37563628901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4843478,
            "unit": "ns",
            "range": "± 105792.47484842934"
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
          "id": "1d18531e11f75250a447b2a0c2e7b7b5296c3ff1",
          "message": "Changelog",
          "timestamp": "2023-03-15T15:58:48+09:00",
          "tree_id": "f1a76ecc24619636b246c8f654731b40b288d6fe",
          "url": "https://github.com/greymistcube/libplanet/commit/1d18531e11f75250a447b2a0c2e7b7b5296c3ff1"
        },
        "date": 1678864358514,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204073.8431372549,
            "unit": "ns",
            "range": "± 8303.806665313323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201989.7027027027,
            "unit": "ns",
            "range": "± 6843.890352654633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172019.32727272727,
            "unit": "ns",
            "range": "± 7333.364606131666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12392789.933333334,
            "unit": "ns",
            "range": "± 187138.65893787597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9887731.5,
            "unit": "ns",
            "range": "± 197787.51173634027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20482.65625,
            "unit": "ns",
            "range": "± 1737.3323702742177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55812.318181818184,
            "unit": "ns",
            "range": "± 3477.7101944307024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43746.13043478261,
            "unit": "ns",
            "range": "± 1690.4367168633692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99148.5172413793,
            "unit": "ns",
            "range": "± 11021.495486740181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5728.270833333333,
            "unit": "ns",
            "range": "± 604.3046195799053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20698.242105263158,
            "unit": "ns",
            "range": "± 2185.893700651683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3549114.285714286,
            "unit": "ns",
            "range": "± 40322.10299275376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5542901.708333333,
            "unit": "ns",
            "range": "± 143011.5017951138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25516660.625,
            "unit": "ns",
            "range": "± 467483.76942076825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6817366.591836735,
            "unit": "ns",
            "range": "± 266190.04835705244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28703068.214285713,
            "unit": "ns",
            "range": "± 316501.3376608453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5946692.938541667,
            "unit": "ns",
            "range": "± 30208.462342713858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1848890.0258091518,
            "unit": "ns",
            "range": "± 1737.2092988268694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365526.3213541666,
            "unit": "ns",
            "range": "± 2950.1294661559696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664322.6809895835,
            "unit": "ns",
            "range": "± 16208.439492949065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839898.751171875,
            "unit": "ns",
            "range": "± 365.97715922501897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769032.5071614584,
            "unit": "ns",
            "range": "± 262.1127139013469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7921801.428571428,
            "unit": "ns",
            "range": "± 79633.21892441456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22084966.153846152,
            "unit": "ns",
            "range": "± 121242.23282053038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 55228207.2,
            "unit": "ns",
            "range": "± 533392.9806895528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 110132818.46666667,
            "unit": "ns",
            "range": "± 1371320.8201285289"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 220248947.92307693,
            "unit": "ns",
            "range": "± 1971235.2835214972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46277.025,
            "unit": "ns",
            "range": "± 2365.929672360732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1438698.5684210525,
            "unit": "ns",
            "range": "± 82265.43313019747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2699982.4516129033,
            "unit": "ns",
            "range": "± 81526.04557720137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2285927.419354839,
            "unit": "ns",
            "range": "± 103829.2451840684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5243608.294117647,
            "unit": "ns",
            "range": "± 102333.91587821991"
          }
        ]
      }
    ]
  }
}