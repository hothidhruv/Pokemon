import React, { useState } from 'react';
import './App.css';

export function ExpandedContent(props) {
    return (
        <>
            <div className='opaquescreen'></div>
            <div className={`expanded-overlay ${props.type}`}>
                <button className='close-button' onClick={()=>{props.closeModel()}}>X</button>
                <div className='expanded-left'>
                    <img className='expanded-image' src={props.image}></img>
                    <p className='expanded-name'>{props.name}</p>
                </div>
                <div className={`expanded-right ${props.type}`}>
                    <table className={`expanded-table ${props.type}`}>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Weight:</td>
                                            <td>{props.weight}</td>

                                        </tr>
                                        <tr>
                                            <td>Height:</td>
                                            <td>{props.height}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Stat1:</td>
                                            <td>{props.stats[0].stat.name}</td>

                                        </tr>
                                        <tr>
                                            <td>Stat2:</td>
                                            <td>{props.stats[1].stat.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Stat3:</td>
                                            <td>{props.stats[2].stat.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Stat4:</td>
                                            <td>{props.stats[3].stat.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Stat5:</td>
                                            <td>{props.stats[4].stat.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Stat6:</td>
                                            <td>{props.stats[5].stat.name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Bs1:</td>
                                            <td>{props.stats[0].base_stat}</td>

                                        </tr>
                                        <tr>
                                            <td>Bs2:</td>
                                            <td>{props.stats[1].base_stat}</td>
                                        </tr>
                                        <tr>
                                            <td>Bs3:</td>
                                            <td>{props.stats[2].base_stat}</td>
                                        </tr>
                                        <tr>
                                            <td>Bs4:</td>
                                            <td>{props.stats[3].base_stat}</td>
                                        </tr>
                                        <tr>
                                            <td>Bs5:</td>
                                            <td>{props.stats[4].base_stat}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}